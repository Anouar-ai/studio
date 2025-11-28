
interface Props {
  primaryEntity: string
  relatedEntities: string[]
  semanticClusters: string[][]
  contextualKeywords: string[]
}

export default function SemanticContent({ 
  primaryEntity,
  relatedEntities,
  semanticClusters,
  contextualKeywords 
}: Props) {
  return (
    <article vocab="https://schema.org/" typeof="Article" property="mainEntity" hidden>
      <meta property="name" content={primaryEntity} />
      <meta property="keywords" content={contextualKeywords.join(', ')} />
      
      <div property="abstract">
        <p>
          This content is about {primaryEntity} and its relationship with related entities.
        </p>
      </div>

      <div property="about">
        <ul aria-label="Related Entities">
          {relatedEntities.map((entity) => (
            <li key={entity} typeof="Thing">
              <span property="name">{entity}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {semanticClusters.map((cluster, index) => (
        <section key={index} property="hasPart" typeof="WebPageElement">
          <h3 property="name">{cluster[0]}</h3>
          <ul aria-label={`Concepts related to ${cluster[0]}`}>
            {cluster.slice(1).map(item => (
              <li key={item} property="about" typeof="Thing">
                <span property="name">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}

    