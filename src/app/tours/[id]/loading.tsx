export default function TourDetailLoading() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="aspect-[16/9] md:aspect-[2.5/1] bg-gray-200 rounded-2xl animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse" />
            <div className="h-32 bg-gray-100 rounded animate-pulse mt-8" />
          </div>
          <div>
            <div className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
