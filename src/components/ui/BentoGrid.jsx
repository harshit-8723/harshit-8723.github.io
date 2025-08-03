import React from 'react';

export const BentoGrid = ({ children }) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-6
        lg:grid-cols-5
        md:grid-rows-4
        gap-4
        max-w-7xl
        mx-auto
      "
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  about,
  icon,
  header,
  extraClasses,
  heading1,
  heading2,
  heading3,
  badges = {},
  img,
  imgList,
  imgClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-3xl border border-neutral-200 bg-white dark:border-white/20 dark:bg-black shadow-md hover:shadow-xl transition duration-300 group z-2 ${extraClasses}`}
    >
      {header && <div>{header}</div>}

      <div className="transition-transform duration-200 group-hover:translate-x-1 space-y-2">
        {icon && <div className="mb-2">{icon}</div>}

        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">{title}</h3>
        {description && (
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        )}

        {/* this is for the about */}
        {about && (
          <div className="text-lg font-semibold text-neutral-600 dark:text-neutral-300 space-y-1">
            {about.map((line, ind) => (
              <p key={ind} className="flex items-start gap-2">
                <span className="text-lg">•</span> {line}
              </p>
            ))
            }
          </div>
        )}


        {/* Tech Stack Headings and Badges */}
        {badges.languages && badges.languages.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1">{heading1}</p>
            <div className="flex flex-wrap gap-2">
              {badges.languages.map((src, index) => (
                <img key={index} src={src} alt="language badge" className="h-6" />
              ))}
            </div>
          </div>
        )}
        {badges.frameworks && badges.frameworks.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1">{heading2}</p>
            <div className="flex flex-wrap gap-2">
              {badges.frameworks.map((src, index) => (
                <img key={index} src={src} alt="framework badge" className="h-6" />
              ))}
            </div>
          </div>
        )}
        {badges.tools && badges.tools.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-1">{heading3}</p>
            <div className="flex flex-wrap gap-2">
              {badges.tools.map((src, index) => (
                <img key={index} src={src} alt="tool badge" className="h-6" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* if imageList exists printing that */}
      {imgList?.length > 0 ? (
        <div className="flex flex-col gap-4 mt-4">
          {imgList.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`illustration-${idx}`}
              className={`object-contain ${imgClassName}`}
            />
          ))}
        </div>
      ) : img && (
        <img
          src={img}
          alt="illustration"
          className={`mt-4 object-contain ${imgClassName}`}
        />
      )}

    </div>
  );
};
