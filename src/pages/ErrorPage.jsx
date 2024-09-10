import Navigation from '../navigation/Navigation';

function ErrorPage() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500 mb-4">An error occurred!</h1>
        <p className="text-lg text-gray-700">Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
