export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          phone: string | null;
          avatar_url: string | null;
          role: "cliente" | "barbeiro" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: "cliente" | "barbeiro" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: "cliente" | "barbeiro" | "admin";
          updated_at?: string;
        };
      };
      servicos: {
        Row: {
          id: string;
          nome: string;
          descricao: string | null;
          preco: number;
          duracao_minutos: number;
          ativo: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          nome: string;
          descricao?: string | null;
          preco: number;
          duracao_minutos: number;
          ativo?: boolean;
          created_at?: string;
        };
        Update: {
          nome?: string;
          descricao?: string | null;
          preco?: number;
          duracao_minutos?: number;
          ativo?: boolean;
        };
      };
      barbeiros: {
        Row: {
          id: string;
          profile_id: string;
          especialidades: string[];
          ativo: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          especialidades?: string[];
          ativo?: boolean;
          created_at?: string;
        };
        Update: {
          especialidades?: string[];
          ativo?: boolean;
        };
      };
      agendamentos: {
        Row: {
          id: string;
          cliente_id: string;
          barbeiro_id: string;
          servico_id: string;
          data_hora: string;
          status: "pendente" | "confirmado" | "concluido" | "cancelado";
          observacoes: string | null;
          preco: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          cliente_id: string;
          barbeiro_id: string;
          servico_id: string;
          data_hora: string;
          status?: "pendente" | "confirmado" | "concluido" | "cancelado";
          observacoes?: string | null;
          preco: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: "pendente" | "confirmado" | "concluido" | "cancelado";
          observacoes?: string | null;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
