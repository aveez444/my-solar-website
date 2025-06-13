import videoUrl from '../assets/videos/net-metering-explanation.mp4';

const VideoDownloadSection = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = 'net-metering-explanation.mp4'; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-xl my-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Visual */}
          <div className="lg:w-1/2 relative" data-aos="fade-right">
            <div className="bg-white p-1 rounded-2xl shadow-2xl">
              <div className="bg-black rounded-xl overflow-hidden aspect-video relative">
                {/* You can optionally use the actual video as a preview */}
                <video 
                  className="absolute inset-0 w-full h-full object-cover" 
                  controls
                  poster="/path-to-poster-image.jpg" // Optional thumbnail
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-white font-bold text-lg">Net Metering Explained</div>
                  <div className="text-green-300 text-sm">Duration: 2:30</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
              <span className="text-green-700 font-semibold">DETAILED EXPLANATION</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Want to <span className="text-green-600">deeply understand</span> Net Metering?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our comprehensive video guide walks you through every aspect of how net metering works, 
              from installation to billing. Download the video to learn at your own pace and share 
              with others who might benefit.
            </p>
            
            <button 
              onClick={handleDownload}
              className="flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Video Guide
            </button>
            
            <div className="mt-6 text-sm text-gray-500">
              <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              File size: 15MB (MP4) | Compatible with all devices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDownloadSection;