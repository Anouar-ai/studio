
import type { Thing, WithContext } from 'schema-dts';

interface SchemaProps<T extends Thing> {
  schema: WithContext<T>;
  id: string;
}

export function Schema<T extends Thing>({ schema, id }: SchemaProps<T>) {
  return (
    <script
      id={`schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
