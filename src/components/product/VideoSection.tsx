"use client";

import { useState } from "react";

interface Video {
  title: string;
  thumbnail: string;
  embedUrl: string;
  duration?: string;
  categories?: string[];
}

interface VideoSectionProps {
  videos: Video[];
}

export default function VideoSection({ videos }: VideoSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="section section-light section-video">
      <div className="container">
        <div className="s-inner">
          <div className="s-title-wrapper">
            <h2 className="s-title">How to Pay Clever</h2>
            <p className="s-text">
              Own your checkout. Your quick guide to shopping now and paying
              later.
            </p>
          </div>
        </div>
      </div>
      <section className="section-video-posts-grid section-light">
        <div className="container">
          <div className="video-posts-grid">
            <div className="loading-spinner" aria-hidden="true" />
            <div className="content-grid content-grid-light content-grid-three">
              <div className="cg-row video-posts-container">
                {videos.map((video, index) => (
                  <div className="cg-col" key={index}>
                    <div
                      className="featured-video-image video-trigger"
                      onClick={() => setSelectedVideo(video)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedVideo(video);
                        }
                      }}
                    >
                      <img
                        className="placeholder"
                        src={video.thumbnail}
                        alt={video.title}
                      />
                      <span className="play-button">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                    {video.categories && video.categories.length > 0 && (
                      <div className="video-categories">
                        {video.categories.map((cat, i) => (
                          <span className="video-category" key={i}>
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                    <h5
                      className="video-title video-trigger"
                      onClick={() => setSelectedVideo(video)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedVideo(video);
                        }
                      }}
                    >
                      {video.title}
                    </h5>
                    {video.duration && (
                      <span className="video-minute-watch">
                        {video.duration}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="load-more-wrapper">
              <a href="/content-hub" className="btn btn-md btn-dark">
                <span className="btn-fill"></span>
                <span className="btn-text">
                  <span className="line line-normal">View all videos</span>
                  <span className="line line-hover">View all videos</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="modal video-modal"
          id="video-modal"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="video-player-container">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                className="video-player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mobile-video-suggestion">
              {selectedVideo.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
