export default function Home() {
  return (
    <div className="h-screen bg-[url('../assets/zam.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute top-0 left-0 h-screen w-screen bg-black/60">
        <div className="text-center text-white flex flex-col justify-center h-full w-full">
          <h1 className="text-4xl pb-5">Welcome to my Photo Gallary</h1>
          <p className="italic font-bold">~All your Dream come true!</p>
        </div>
      </div>
    </div>
  );
}
