import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/contacts')) {
    return NextResponse.redirect(new URL('/signup', request.url));
  }

  return NextResponse.next();
}
