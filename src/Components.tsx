import { ComponentType, PropsWithChildren, ReactNode } from "react";

import styles from "./components.module.css";
import { useLayout } from "./Layout.tsx";
import { icons } from "./icons";

export const Page = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

export const ContactSection = ({
  children,
}: {
  children?: ReactNode | null;
}) => {
  const {
    contactFontSize: fontSize,
    contactFontWeight: fontWeight,
    contactFontFamily: fontFamily,
  } = useLayout();
  return (
    <div
      className={styles.contactSection}
      style={{ fontSize, fontWeight, fontFamily }}
    >
      {children}
    </div>
  );
};

export const ContactSectionItem = ({
  Icon,
  children,
}: PropsWithChildren<{ Icon?: ComponentType<IconProps> }>) => (
  <div className={styles.contactSectionItem}>
    {Icon && <Icon height={15} />}
    {children}
  </div>
);

export const Mail = ({ children }: PropsWithChildren) => (
  <ContactSectionItem Icon={icons.Mail}>{children}</ContactSectionItem>
);
export const Phone = ({ children }: PropsWithChildren) => (
  <ContactSectionItem Icon={icons.Phone}>{children}</ContactSectionItem>
);
export const Location = ({ children }: PropsWithChildren) => (
  <ContactSectionItem Icon={icons.Location}>{children}</ContactSectionItem>
);
export const Link = ({ children }: PropsWithChildren) => (
  <ContactSectionItem Icon={icons.Link}>{children}</ContactSectionItem>
);
export const GitHub = ({ children }: PropsWithChildren) => (
  <ContactSectionItem Icon={icons.GitHub}>{children}</ContactSectionItem>
);
export const LinkedIn = ({ children }: PropsWithChildren) => (
  <ContactSectionItem Icon={icons.LinkedIn}>{children}</ContactSectionItem>
);

export const Section = ({
  style,
  children,
}: PropsWithChildren<{ style?: string }>) => (
  <div className={`${styles.section} ${style ?? ""}`}>{children}</div>
);

export const SectionTitle = ({ children }: { children: string }) => {
  const {
    sectionTitleFontSize: fontSize,
    sectionTitleFontWeight: fontWeight,
    sectionTitleFontFamily: fontFamily,
  } = useLayout();
  return (
    <>
      <h2
        className={styles.sectionTitle}
        style={{ fontSize, fontWeight, fontFamily }}
      >
        {children}
      </h2>
      <hr className={styles.divider} />
    </>
  );
};

export const Entries = ({ children }: PropsWithChildren) => (
  <div className={styles.entries}>{children}</div>
);

export const Entry = ({ children }: PropsWithChildren) => (
  <div className={styles.entry}>{children}</div>
);

export const EntryTitle = ({
  children,
  fontSize,
}: {
  children: string;
  fontSize?: number;
}) => {
  const {
    entryTitleFontSize: size,
    entryTitleFontWeight: fontWeight,
    entryTitleFontFamily: fontFamily,
  } = useLayout();
  return (
    <h3
      className={styles.entryTitle}
      style={{ fontSize: fontSize ?? size, fontWeight, fontFamily }}
    >
      {children}
    </h3>
  );
};

export const SubTitle = ({ children }: { children: string }) => {
  const {
    subTitleFontSize: fontSize,
    subTitleFontWeight: fontWeight,
    subTitleFontFamily: fontFamily,
  } = useLayout();
  return (
    <h4
      className={styles.subTitle}
      style={{ fontSize, fontWeight, fontFamily }}
    >
      {children}
    </h4>
  );
};

export const BodyText = ({ children }: { children: string }) => {
  const {
    bodyFontSize: fontSize,
    bodyFontWeight: fontWeight,
    bodyFontFamily: fontFamily,
  } = useLayout();
  return (
    <p className={styles.bodyText} style={{ fontSize, fontWeight, fontFamily }}>
      {children}
    </p>
  );
};

export const SubTitleBlock = ({ children }: PropsWithChildren) => (
  <div className={styles.subBlock}>{children}</div>
);

export const BulletPoints = ({
  points,
  bullet = "▸ ",
}: {
  points: string[];
  bullet?: string;
}) => {
  const {
    bodyFontSize: fontSize,
    bodyFontWeight: fontWeight,
    bodyFontFamily: fontFamily,
  } = useLayout();
  return (
    <ul
      className={styles.bulletPoints}
      // @ts-expect-error "--font-size" css variable
      style={{ fontSize, fontWeight, fontFamily, "--font-size": fontSize }}
    >
      {points.map((p, i) => (
        <li key={i} className={styles.bulletPoint} data-bullet={bullet}>
          {p}
        </li>
      ))}
    </ul>
  );
};

export const ConjoinedPoints = ({
  points,
  bullet = "•",
  prefix,
  noSpace,
}: {
  points: Array<string | undefined>;
  bullet?: string;
  prefix?: string;
  noSpace?: boolean;
}) => (
  <SubTitle>
    {(prefix ?? "") +
      points.reduce((a, c) =>
        c ? `${a}${noSpace ? bullet : ` ${bullet} `}${c}` : a,
      )}
  </SubTitle>
);
