import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Next.js Tailwind CSS Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tailwind CSS with Next.js!</h1>
        <Button>Click Me</Button>
      </main>
    </div>
  );
}
