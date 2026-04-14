-- ============================================
-- Schema do banco de dados - App Barbearia
-- ============================================

-- Habilitar extensão UUID
create extension if not exists "uuid-ossp";

-- ============================================
-- PROFILES (vinculado ao auth.users do Supabase)
-- ============================================
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  phone text,
  avatar_url text,
  role text not null default 'cliente' check (role in ('cliente', 'barbeiro', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Usuários veem seu próprio perfil"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Usuários atualizam seu próprio perfil"
  on public.profiles for update
  using (auth.uid() = id);

-- Trigger para criar profile automaticamente no cadastro
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', 'Usuário'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================
-- SERVIÇOS
-- ============================================
create table public.servicos (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  descricao text,
  preco numeric(10, 2) not null,
  duracao_minutos integer not null,
  ativo boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.servicos enable row level security;

create policy "Serviços visíveis para todos"
  on public.servicos for select
  using (ativo = true);

-- Inserir serviços iniciais
insert into public.servicos (nome, descricao, preco, duracao_minutos) values
  ('Corte', 'Corte masculino com tesoura ou máquina', 40.00, 30),
  ('Barba', 'Acabamento e modelagem de barba', 30.00, 20),
  ('Corte + Barba', 'Combo completo com desconto especial', 65.00, 50),
  ('Progressiva', 'Tratamento alisante para cabelos', 80.00, 60),
  ('Hidratação', 'Hidratação profunda para cabelo e barba', 50.00, 40),
  ('Sobrancelha', 'Design e acabamento de sobrancelha', 20.00, 15);

-- ============================================
-- BARBEIROS
-- ============================================
create table public.barbeiros (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references public.profiles(id) on delete cascade not null,
  especialidades text[] default '{}',
  ativo boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.barbeiros enable row level security;

create policy "Barbeiros visíveis para todos"
  on public.barbeiros for select
  using (ativo = true);

-- ============================================
-- AGENDAMENTOS
-- ============================================
create table public.agendamentos (
  id uuid primary key default uuid_generate_v4(),
  cliente_id uuid references public.profiles(id) on delete cascade not null,
  barbeiro_id uuid references public.barbeiros(id) not null,
  servico_id uuid references public.servicos(id) not null,
  data_hora timestamptz not null,
  status text not null default 'pendente' check (status in ('pendente', 'confirmado', 'concluido', 'cancelado')),
  observacoes text,
  preco numeric(10, 2) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.agendamentos enable row level security;

create policy "Clientes veem seus agendamentos"
  on public.agendamentos for select
  using (auth.uid() = cliente_id);

create policy "Clientes criam agendamentos"
  on public.agendamentos for insert
  with check (auth.uid() = cliente_id);

create policy "Clientes cancelam seus agendamentos"
  on public.agendamentos for update
  using (auth.uid() = cliente_id and status = 'pendente');

-- Trigger para updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger agendamentos_updated_at
  before update on public.agendamentos
  for each row execute function public.handle_updated_at();
