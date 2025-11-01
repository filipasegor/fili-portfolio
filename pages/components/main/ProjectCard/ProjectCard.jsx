import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import buttonStyles from "../../../../styles/_MdProject.module.scss";
import arrow from "../../../../public/arrow.svg";

const ProjectCard = ({
  title,
  description,
  metrics,
  imageSrc,
  imageAlt,
  videoSrc,
  projectId,
}) => {
  return (
    <Link href={`/works/${projectId}`} className={styles.projectCardLink}>
      <div className={styles.projectCard}>
        <div className={styles.projectContent}>
          <div className={styles.projectHeader}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescriptionText}>{description}</p>
          </div>
        </div>

        <div className={styles.projectImage}>
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "inherit",
              }}
            />
          ) : (
            <img src={imageSrc} alt={imageAlt} />
          )}
        </div>

        <div className={styles.projectDescription}>
          <div className={styles.projectMetrics}>
            {metrics &&
              metrics.map((metric, index) => (
                <div key={index} className={styles.metricGroup}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
          </div>
          <div className={buttonStyles.Button}>
            <Image
              className={buttonStyles.Image}
              alt={arrow}
              src={arrow}
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
