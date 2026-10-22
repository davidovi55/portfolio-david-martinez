import { useEffect, useState } from 'react'
import { certificates, contact, content, type Language } from './content'
import ChatWidget from './ChatWidget'
import { Analytics } from '@vercel/analytics/react'

function hasValue(value: string) {
  return value.trim().length > 0
}

export default function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]
  const currentCertificates = certificates[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function changeLanguage() {
    setLanguage((current) => current === 'es' ? 'en' : 'es')
    setMenuOpen(false)
  }

  return (
    <>
      <Analytics />
      <header className="header">
        <div className="container header-content">
          <a className="brand" href="#top" aria-label="David Martínez Barragán">
            <span>DM</span>
            <strong>David Martínez</strong>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {t.menu}
          </button>

          <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
            {t.navigation.map(([id, label]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            {currentCertificates.length > 0 && (
              <a href="#certificates" onClick={() => setMenuOpen(false)}>
                {t.certificates.title}
              </a>
            )}
            <button className="language-button" type="button" onClick={changeLanguage}>
              {t.languageLabel}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-content">
            <p className="label">{t.hero.label}</p>
            <h1>{t.hero.title}</h1>
            <h2>{t.hero.subtitle}</h2>
            <p className="hero-text">{t.hero.text}</p>

            <div className="actions">
              <a className="button button-primary" href="#projects">{t.hero.projects}</a>
              <a className="button button-secondary" href="#contact">{t.hero.contact}</a>
              {hasValue(contact.cv) && (
                <a className="button button-secondary" href={contact.cv} target="_blank" rel="noreferrer">
                  {t.hero.cv}
                </a>
              )}
              {hasValue(contact.linkedin) && (
                <a className="text-link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              )}
              {hasValue(contact.github) && (
                <a className="text-link" href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              )}
            </div>
          </div>
        </section>

        <section className="section assistant-section" id="assistant">
          <div className="container assistant-layout">
            <div className="assistant-intro">
              <p className="label">{language === 'es' ? 'UNA FORMA DISTINTA DE CONOCERME' : 'A DIFFERENT WAY TO GET TO KNOW ME'}</p>
              <h2 className="section-title">{language === 'es' ? 'Pregunta directamente.' : 'Ask directly.'}</h2>
              <p>{language === 'es'
                ? 'He creado este asistente para que un equipo pueda explorar mi experiencia con más contexto que en un CV tradicional.'
                : 'I built this assistant so a team can explore my experience with more context than a traditional CV.'}</p>
              <ul>
                <li>{language === 'es' ? 'Responde sobre proyectos, herramientas y experiencia end-to-end.' : 'Answers about projects, tools and end-to-end delivery.'}</li>
                <li>{language === 'es' ? 'Puede comparar mi perfil con una oferta concreta.' : 'It can compare my profile with a specific job offer.'}</li>
                <li>{language === 'es' ? 'Adapta la respuesta al rol técnico que estés valorando.' : 'It adapts its answer to the technical role you are considering.'}</li>
              </ul>
            </div>
            <ChatWidget language={language} />
          </div>
        </section>

        <section className="section" id="about">
          <div className="container two-columns">
            <h2 className="section-title">{t.about.title}</h2>
            <div>
              <div className="body-copy">
                {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <dl className="detail-list">
                {t.about.details.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section section-gray" id="projects">
          <div className="container">
            <div className="section-intro">
              <h2 className="section-title">{t.projects.title}</h2>
              <p>{t.projects.intro}</p>
            </div>

            <div className="project-grid">
              {t.projects.items.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <span className="project-number">0{index + 1}</span>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container two-columns">
            <h2 className="section-title">{t.experience.title}</h2>
            <div className="timeline">
              {t.experience.items.map((item) => (
                <article key={`${item.organization}-${item.role}`}>
                  <p className="timeline-role">{item.role}</p>
                  <h3>{item.organization}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="skills">
          <div className="container">
            <h2 className="section-title">{t.skills.title}</h2>

            <div className="skills-layout">
              <div>
                <h3 className="subsection-title">{t.skills.technicalTitle}</h3>
                <div className="technical-grid">
                  {t.skills.technical.map((group) => (
                    <article className="skill-card" key={group.title}>
                      <h4>{group.title}</h4>
                      <div className="tags tags-dark">
                        {group.items.map((item) => <span key={item}>{item}</span>)}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="soft-skills">
                <h3 className="subsection-title">{t.skills.softTitle}</h3>
                <ul>
                  {t.skills.soft.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container two-columns">
            <h2 className="section-title">{t.education.title}</h2>
            <div className="education-list">
              {t.education.items.map((item) => (
                <article key={item.degree}>
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {currentCertificates.length > 0 && (
        <section className="section section-gray" id="certificates">
          <div className="container">
            <h2 className="section-title">{t.certificates.title}</h2>

            <div className="certificate-grid">
              {currentCertificates.map((certificate) => (
                <article
                  className="certificate-card"
                  key={`${certificate.title}-${certificate.date}`}
                >
                  <a
                    className="certificate-image"
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.certificates.view}: ${certificate.title}`}
                  >
                    <img
                      src={certificate.image}
                      alt=""
                      loading="lazy"
                    />
                  </a>

                  <div className="certificate-info">
                    <h3>{certificate.title}</h3>

                    <p>
                      {certificate.issuer} · {certificate.date}
                    </p>

                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.certificates.view} ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

        <section className="section contact" id="contact">
          <div className="container two-columns">
            <div>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="contact-text">{t.contact.text}</p>
            </div>

            <div className="contact-list">
              <a href={`mailto:${contact.email}`}>
                <span>{t.contact.email}</span>
                <strong>{contact.email}</strong>
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                <span>{t.contact.phone}</span>
                <strong>{contact.phone}</strong>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <span>{t.contact.linkedin}</span>
                <strong>David Martínez Barragán ↗</strong>
              </a>
              {hasValue(contact.github) && (
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <span>{t.contact.github}</span>
                  <strong>{contact.github.replace('https://', '')} ↗</strong>
                </a>
              )}
              {hasValue(contact.cv) && (
                <a href={contact.cv} target="_blank" rel="noreferrer">
                  <span>{t.contact.cv}</span>
                  <strong>{t.hero.cv} ↗</strong>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <strong>David Martínez Barragán</strong>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  )
}
