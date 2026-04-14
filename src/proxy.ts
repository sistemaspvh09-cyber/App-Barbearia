import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Rotas públicas que não precisam de autenticação
const PUBLIC_PATHS = ["/", "/entrar", "/cadastrar"];

// Rotas que só podem ser acessadas sem autenticação (redirecionam para /inicio se logado)
const AUTH_ONLY_PATHS = ["/entrar", "/cadastrar"];

export async function proxy(request: NextRequest) {
  // Se as variáveis de ambiente do Supabase não estiverem configuradas,
  // deixa passar sem verificação de autenticação (modo dev sem Supabase)
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  const isPublicPath = PUBLIC_PATHS.includes(pathname);
  const isAuthOnlyPath = AUTH_ONLY_PATHS.includes(pathname);

  // Usuário não autenticado tentando acessar rota protegida
  if (!user && !isPublicPath) {
    return NextResponse.redirect(new URL("/entrar", request.url));
  }

  // Usuário autenticado tentando acessar página de login/cadastro
  if (user && isAuthOnlyPath) {
    return NextResponse.redirect(new URL("/inicio", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|manifest.json|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
