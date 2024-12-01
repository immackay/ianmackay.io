import {
  BodyText,
  BulletPoints,
  ConjoinedPoints,
  ContactSection,
  Entries,
  Entry,
  EntryTitle,
  GitHub,
  Link,
  LinkedIn,
  Mail,
  Page,
  Phone,
  Section,
  SectionTitle,
  SubTitle,
  Location,
  SubTitleBlock,
} from "./Components.tsx";
import {
  contact,
  coursework,
  education,
  experience,
  involvement,
  name,
  options,
  projects,
  publications,
  skills,
  summary,
} from "./resume.config.ts";
import { LayoutProvider, useLayout } from "./Layout";
import GoogleFontLoader from "react-google-font-loader";
import sections from "./sections.module.css";

export const Resume = () => {
  const {
    fonts,
    titleFontSize: fontSize,
    titleFontWeight: fontWeight,
    titleFontFamily: fontFamily,
  } = useLayout();

  const firstContactSection = !!(
    contact.email ??
    contact.phone ??
    contact.location
  );

  const secondContactSection = !!(
    contact.website ??
    contact.github ??
    contact.linkedin
  );

  return (
    <>
      <GoogleFontLoader fonts={fonts} />
      <LayoutProvider>
        <Page>
          <div className={sections.contact}>
            <h1 style={{ fontSize, fontWeight, fontFamily }}>{name}</h1>
            {firstContactSection && (
              <ContactSection>
                <Mail>{contact.email}</Mail>
                <Phone>{contact.phone}</Phone>
                <Location>{contact.location}</Location>
              </ContactSection>
            )}
            {secondContactSection && (
              <ContactSection>
                {contact.website && <Link>{contact.website}</Link>}
                {contact.github && <GitHub>{contact.github}</GitHub>}
                {contact.linkedin && <LinkedIn>{contact.linkedin}</LinkedIn>}
              </ContactSection>
            )}
          </div>
          <Section style={sections.summary}>
            <SectionTitle>Summary</SectionTitle>
            <BodyText>{summary}</BodyText>
          </Section>
          <Section style={sections.experience}>
            <SectionTitle>Experience</SectionTitle>
            <Entries>
              {experience.map((e, i) => (
                <Entry key={i}>
                  <EntryTitle>{e.role}</EntryTitle>
                  <SubTitleBlock>
                    <SubTitle>{e.company}</SubTitle>
                    <SubTitle>{`${e.timeframe}, ${e.location}`}</SubTitle>
                  </SubTitleBlock>
                  {e.responsibilities && (
                    <BulletPoints points={e.responsibilities} />
                  )}
                </Entry>
              ))}
            </Entries>
          </Section>
          {options?.showPublications && publications && (
            <Section style={sections.publications}>
              <SectionTitle>Publications</SectionTitle>
              <Entries>
                {publications.map((p, i) => (
                  <Entry key={i}>
                    <EntryTitle>{p.name}</EntryTitle>
                    <SubTitleBlock>
                      <ConjoinedPoints points={[p.journal, p.link]} />
                      <SubTitle>{p.timeframe}</SubTitle>
                    </SubTitleBlock>
                    {p.summary && <BodyText>{p.summary}</BodyText>}
                  </Entry>
                ))}
              </Entries>
            </Section>
          )}
          {options?.showEducation && (
            <Section style={sections.education}>
              <SectionTitle>Education</SectionTitle>
              <Entries>
                {education.map((e, i) => (
                  <Entry key={i}>
                    <EntryTitle>{e.degree}</EntryTitle>
                    <SubTitleBlock>
                      <ConjoinedPoints points={[e.school, e.minor]} />
                      <SubTitle>{e.location}</SubTitle>
                    </SubTitleBlock>
                  </Entry>
                ))}
              </Entries>
            </Section>
          )}
          {options?.showCoursework && coursework && (
            <Section style={sections.coursework}>
              {/*<SectionTitle>Coursework</SectionTitle>*/}
              <Entries>
                {coursework.map((c, i) => (
                  <Entry key={i}>
                    <ConjoinedPoints
                      bullet={"—"}
                      points={[
                        c.title,
                        c.skills.reduce((a, c) => `${a}, ${c}`),
                      ]}
                    />
                    {c.application && <BulletPoints points={[c.application]} />}
                  </Entry>
                ))}
              </Entries>
            </Section>
          )}
          {options?.showInvolvement && involvement && (
            <Section style={sections.involvement}>
              <SectionTitle>Involvement</SectionTitle>
              <Entries>
                {involvement.map((e, i) => (
                  <Entry key={i}>
                    <EntryTitle>{e.role}</EntryTitle>
                    <SubTitleBlock>
                      <ConjoinedPoints points={[e.school, e.organization]} />
                      <SubTitle>{e.timeframe}</SubTitle>
                    </SubTitleBlock>
                    <BulletPoints points={e.responsibilities} />
                  </Entry>
                ))}
              </Entries>
            </Section>
          )}
          {options?.showProjects && projects && (
            <Section style={sections.projects}>
              <SectionTitle>Projects</SectionTitle>
              <Entries>
                {projects.map((p, i) => (
                  <Entry key={i}>
                    <EntryTitle>{p.name}</EntryTitle>
                    <SubTitleBlock>
                      <ConjoinedPoints points={p.skills} />
                      <SubTitle>{p.timeframe}</SubTitle>
                    </SubTitleBlock>
                    <BodyText>{p.summary}</BodyText>
                  </Entry>
                ))}
              </Entries>
            </Section>
          )}
          {options?.showSkills && skills && (
            <Section style={sections.skills}>
              <SectionTitle>Skills</SectionTitle>
              {skills.map((list, i) => (
                <ConjoinedPoints
                  key={i}
                  noSpace
                  bullet={", "}
                  points={list.items}
                  prefix={`${list.category}: `}
                />
              ))}
            </Section>
          )}
        </Page>
      </LayoutProvider>
    </>
  );
};
