type WorldMediaProps = {
  className?: string;
  videoSrc?: string;
  videoType?: string;
  posterSrc?: string;
  alt?: string;
  preload?: "none" | "metadata" | "auto";
  loading?: "eager" | "lazy";
  ariaHidden?: boolean;
};

export function WorldMedia({
  className,
  videoSrc,
  videoType,
  posterSrc,
  alt,
  preload = "metadata",
  loading = "lazy",
  ariaHidden = true,
}: WorldMediaProps) {
  const decorative = ariaHidden && !alt;

  if (videoSrc && videoType) {
    return (
      <video
        aria-hidden={decorative ? true : undefined}
        aria-label={alt}
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
        alt={alt ?? ""}
        aria-hidden={decorative ? true : undefined}
        className={className}
        decoding="async"
        loading={loading}
        src={posterSrc}
      />
    );
  }

  return <span aria-hidden={decorative ? true : undefined} className={className} />;
}
