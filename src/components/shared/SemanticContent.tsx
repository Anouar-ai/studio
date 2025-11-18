
interface Props {
  topic: string
  primaryEntity: string
  relatedEntities: string[]
  semanticClusters: string[][]
}

export default function SemanticContent({ 
  topic, 
  primaryEntity,
  relatedEntities,
  semanticClusters 
}: Props) {
  return (
    <article vocab="https://schema.org/" typeof="Article">
      {/* Primary Entity - Strong semantic signal */}
      <h1 property="headline">
        {primaryEntity}: Comprehensive Guide
      </h1>
      
      {/* Semantic Introduction - Cover all related concepts */}
      <div property="abstract">
        <p>
          Understanding {primaryEntity} requires exploring its relationship with{' '}
          {relatedEntities.map((entity, i) => (
            <span key={i} property="about" typeof="Thing">
              <span property="name">{entity}</span>
              {i < relatedEntities.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
      
      {/* Semantic Clusters - Cover semantic neighborhoods */}
      {semanticClusters.map((cluster, index) => (
        <section key={index} property="hasPart" typeof="WebPageElement">
          <h2>{cluster[0]}</h2>
          <div>
            {/* Cover all terms in the semantic cluster naturally */}
            <p>
              {cluster.slice(1).join(', ')} are all important aspects of {cluster[0]}.
            </p>
          </div>
        </section>
      ))}
    </article>
  )
}
