import Link from 'next/link';
import { Form } from 'app/form';
import prisma from '@/app/prisma';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';

export default function Login() {
  async function register(formData: FormData) {
    'use server';
    let email = formData.get('email') as string;
    let password = formData.get('password') as string;

    const exists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exists) {
      console.log('User already exists');
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await prisma.user.create({
        data: {
          email,
          password: await hash(password, 10),
        },
      });
      console.log('User created');
      redirect('/login');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/login" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
