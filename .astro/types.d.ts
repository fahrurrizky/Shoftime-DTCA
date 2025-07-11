declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"post-1.md": {
	id: "post-1.md";
  slug: "post-1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-2.md": {
	id: "post-2.md";
  slug: "post-2";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-3.md": {
	id: "post-3.md";
  slug: "post-3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-4.md": {
	id: "post-4.md";
  slug: "post-4";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-5.md": {
	id: "post-5.md";
  slug: "post-5";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-6.md": {
	id: "post-6.md";
  slug: "post-6";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"docs": {
"advanced/technical-specifications.mdx": {
	id: "advanced/technical-specifications.mdx";
  slug: "advanced/technical-specifications";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/custom-solutions.mdx": {
	id: "construction/custom-solutions.mdx";
  slug: "construction/custom-solutions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/project-planning.mdx": {
	id: "construction/project-planning.mdx";
  slug: "construction/project-planning";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/safety.mdx": {
	id: "construction/safety.mdx";
  slug: "construction/safety";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/service-overview.mdx": {
	id: "construction/service-overview.mdx";
  slug: "construction/service-overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/guides/first-project-checklist.mdx": {
	id: "de/guides/first-project-checklist.mdx";
  slug: "de/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/guides/getting-started.mdx": {
	id: "de/guides/getting-started.mdx";
  slug: "de/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/guides/intro.mdx": {
	id: "de/guides/intro.mdx";
  slug: "de/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/welcome-to-docs.mdx": {
	id: "de/welcome-to-docs.mdx";
  slug: "de/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/guides/first-project-checklist.mdx": {
	id: "es/guides/first-project-checklist.mdx";
  slug: "es/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/guides/getting-started.mdx": {
	id: "es/guides/getting-started.mdx";
  slug: "es/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/guides/intro.mdx": {
	id: "es/guides/intro.mdx";
  slug: "es/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/welcome-to-docs.mdx": {
	id: "es/welcome-to-docs.mdx";
  slug: "es/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/guides/first-project-checklist.mdx": {
	id: "fa/guides/first-project-checklist.mdx";
  slug: "fa/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/guides/getting-started.mdx": {
	id: "fa/guides/getting-started.mdx";
  slug: "fa/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/guides/intro.mdx": {
	id: "fa/guides/intro.mdx";
  slug: "fa/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/welcome-to-docs.mdx": {
	id: "fa/welcome-to-docs.mdx";
  slug: "fa/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/guides/first-project-checklist.mdx": {
	id: "fr/guides/first-project-checklist.mdx";
  slug: "fr/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/guides/getting-started.mdx": {
	id: "fr/guides/getting-started.mdx";
  slug: "fr/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/guides/intro.mdx": {
	id: "fr/guides/intro.mdx";
  slug: "fr/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/welcome-to-docs.mdx": {
	id: "fr/welcome-to-docs.mdx";
  slug: "fr/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/first-project-checklist.mdx": {
	id: "guides/first-project-checklist.mdx";
  slug: "guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/getting-started.mdx": {
	id: "guides/getting-started.mdx";
  slug: "guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/intro.mdx": {
	id: "guides/intro.mdx";
  slug: "guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/guides/first-project-checklist.mdx": {
	id: "ja/guides/first-project-checklist.mdx";
  slug: "ja/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/guides/getting-started.mdx": {
	id: "ja/guides/getting-started.mdx";
  slug: "ja/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/guides/intro.mdx": {
	id: "ja/guides/intro.mdx";
  slug: "ja/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/welcome-to-docs.mdx": {
	id: "ja/welcome-to-docs.mdx";
  slug: "ja/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/equipment-care.mdx": {
	id: "tools/equipment-care.mdx";
  slug: "tools/equipment-care";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/tool-guides.mdx": {
	id: "tools/tool-guides.mdx";
  slug: "tools/tool-guides";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"welcome-to-docs.mdx": {
	id: "welcome-to-docs.mdx";
  slug: "welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/guides/first-project-checklist.mdx": {
	id: "zh-cn/guides/first-project-checklist.mdx";
  slug: "zh-cn/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/guides/getting-started.mdx": {
	id: "zh-cn/guides/getting-started.mdx";
  slug: "zh-cn/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/guides/intro.mdx": {
	id: "zh-cn/guides/intro.mdx";
  slug: "zh-cn/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/welcome-to-docs.mdx": {
	id: "zh-cn/welcome-to-docs.mdx";
  slug: "zh-cn/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};
"insights": {
"insight-1.md": {
	id: "insight-1.md";
  slug: "insight-1";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-2.md": {
	id: "insight-2.md";
  slug: "insight-2";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-3.md": {
	id: "insight-3.md";
  slug: "insight-3";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-4.md": {
	id: "insight-4.md";
  slug: "insight-4";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-5.md": {
	id: "insight-5.md";
  slug: "insight-5";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-6.md": {
	id: "insight-6.md";
  slug: "insight-6";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
};
"porto": {
"a765.md": {
	id: "a765.md";
  slug: "a765";
  body: string;
  collection: "porto";
  data: any
} & { render(): Render[".md"] };
"b203.md": {
	id: "b203.md";
  slug: "b203";
  body: string;
  collection: "porto";
  data: any
} & { render(): Render[".md"] };
"f303.md": {
	id: "f303.md";
  slug: "f303";
  body: string;
  collection: "porto";
  data: any
} & { render(): Render[".md"] };
"t845.md": {
	id: "t845.md";
  slug: "t845";
  body: string;
  collection: "porto";
  data: any
} & { render(): Render[".md"] };
};
"products": {
"a765.md": {
	id: "a765.md";
  slug: "a765";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b203.md": {
	id: "b203.md";
  slug: "b203";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"f303.md": {
	id: "f303.md";
  slug: "f303";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"t845.md": {
	id: "t845.md";
  slug: "t845";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
