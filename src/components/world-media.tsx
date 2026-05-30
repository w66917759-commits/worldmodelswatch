type WorldMediaProps = {
  className?: string;
  videoSrc?: string;
  videoType?: string;
  posterSrc?: string;
  preload?: "none" | "metadata" | "auto";
  loading?: "eager" | "lazy";
  ariaHidden?: boolean;
};

export function WorldMedia({
  className,
  videoSrc,
  videoType,
  posterSrc,
  preload = "metadata",
  loading = "lazy",
  ariaHidden = true,
}: WorldMediaProps) {
  if (videoSrc && videoType) {
    return (
      <video
        aria-hidden={ariaHidden}
        autoPlay
        className={className}
        loop
        muted
        playsInline
        poster={posterSrc}
        preload={preload}
      >
        <source src={videoSrc} type={videoType} />
      </video>
    );
  }

  if (posterSrc) {
    return (
      <img
        alt=""
        aria-hidden={ariaHidden}
        className={className}
        decoding="async"
        loading={loading}
        src={posterSrc}
      />
    );
  }

  return <span aria-hidden={ariaHidden} className={className} />;
}
