import { createClient } from "contentful";
import { defaultLanguage } from "@/app/i18n/settings";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

interface QueryOptions {
  content_type: string;
  locale?: string;
  [key: string]: unknown;
}

export async function fetchEntries(
  contentType: string,
  locale: string = defaultLanguage,
  additionalOptions: Record<string, unknown> = {}
) {
  const options: QueryOptions = {
    content_type: contentType,
    locale,
    ...additionalOptions,
  };

  try {
    const entries = await client.getEntries(options);
    const dataToBeReturned =
      entries.items.length > 1 ? entries.items : entries.items[0];
    return dataToBeReturned;
  } catch (error) {
    console.error(
      `Error fetching entries for content type ${contentType}:`,
      error
    );
    return [];
  }
}

export async function fetchEntryById(
  entryId: string,
  locale: string = defaultLanguage
) {
  try {
    const entry = await client.getEntry(entryId, { locale });
    return entry;
  } catch (error) {
    console.error(`Error fetching entry with ID ${entryId}:`, error);
    return null;
  }
}
