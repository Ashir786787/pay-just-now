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
                          className="play"
                          width="14"
                          height="19"
                          viewBox="0 0 14 19"
                          fill="none"
                        >
                          <path d="M0,18.2v-18l14,9L0,18.2z" fill="black" />
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
                      <p className="video-minute-watch">
                        {video.duration}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="load-more-wrapper">
              <a
                href="/content-hub"
                className="btn btn-md btn-dark"
              >
                <span className="btn-fill"></span>
                <span className="btn-text">View all videos</span>
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
          <div className="modal-wrapper">
            <div className="modal-content">
              <button
                className="modal-close video-modal-close"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4.26732 12.6663L3.33398 11.733L7.06732 7.99967L3.33398 4.26634L4.26732 3.33301L8.00065 7.06634L11.734 3.33301L12.6673 4.26634L8.93398 7.99967L12.6673 11.733L11.734 12.6663L8.00065 8.93301L4.26732 12.6663Z"
                    fill="#000000"
                  />
                </svg>
              </button>
              <div className="modal-body">
                <div className="video-wrapper">
                  <div className="video-player-container">
                    <iframe
                      src={selectedVideo.embedUrl}
                      title={selectedVideo.title}
                      className="video-player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-video-suggestion">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="24" fill="#BDF500" />
              <path
                d="M16 32V30H18.75L18.35 29.65C17.4833 28.8833 16.875 28.0083 16.525 27.025C16.175 26.0417 16 25.05 16 24.05C16 22.2 16.5542 20.5542 17.6625 19.1125C18.7708 17.6708 20.2167 16.7167 22 16.25V18.35C20.8 18.7833 19.8333 19.5208 19.1 20.5625C18.3667 21.6042 18 22.7667 18 24.05C18 24.8 18.1417 25.5292 18.425 26.2375C18.7083 26.9458 19.15 27.6 19.75 28.2L20 28.45V26H22V32H16ZM26 31.75V29.65C27.2 29.2167 28.1667 28.4792 28.9 27.4375C29.6333 26.3958 30 25.2333 30 23.95C30 23.2 29.8583 22.4708 29.575 21.7625C29.2917 21.0542 28.85 20.4 28.25 19.8L28 19.55V22H26V16H32V18H29.25L29.65 18.35C30.4667 19.1667 31.0625 20.0542 31.4375 21.0125C31.8125 21.9708 32 22.95 32 23.95C32 25.8 31.4458 27.4458 30.3375 28.8875C29.2292 30.3292 27.7833 31.2833 26 31.75Z"
                fill="black"
              />
            </svg>
            <p>Rotate your device for the best experience</p>
          </div>
        </div>
      )}
    </section>
  );
}
