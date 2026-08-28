"use client";

import { useState } from "react";

interface Video {
  title: string;
  thumbnail: string;
  embedUrl: string;
  duration?: string;
}

interface VideoSectionProps {
  videos: Video[];
}

export default function VideoSection({ videos }: VideoSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="site-container text-center">
        <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How to Pay Clever
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-14">
          Own your checkout. Your quick guide to shopping now and paying later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setSelectedVideo(video)}
              className="group text-left rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-surface ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {video.duration && (
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h4 className="font-['Outfit'] text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
              </div>
            </button>
          ))}
        </div>

        <a
          href="https://www.youtube.com/@PayJustNow"
          target="_blank"
          rel="noopener"
          className="inline-block mt-12 px-8 py-3 rounded-full border-2 border-surface text-surface font-semibold hover:bg-surface hover:text-white transition-colors"
        >
          View all videos
        </a>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-3xl font-light hover:text-gray-300 transition-colors cursor-pointer"
            >
              &times;
            </button>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
