export default function MiniPortfolio(){
    return(
        <>
         <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#255036] mb-8">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="path/to/portfolio1.jpg" alt="Portfolio Item" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600">A brief description of the project and its key features.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="path/to/portfolio2.jpg" alt="Portfolio Item" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600">A brief description of the project and its key features.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="path/to/portfolio3.jpg" alt="Portfolio Item" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-600">A brief description of the project and its key features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}