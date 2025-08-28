import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      小学: "https://zsz8.com:8",
      健康: "https://6.cjsq.net:6",
      窗帘网: "https://www.clw8.com:5",
      摘星辰: "https://blog.zzzxc.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Writing",
        limit: 5,
        // 排除了"某个"下的文章
        // filter: (f) => !f.slug!.startsWith("某个/") && !f.frontmatter?.noindex,
        filter: (f) =>  !f.frontmatter?.noindex,
      }),
    ),
    // 目录，排除了"某个目录"下的目录
    Component.DesktopOnly(
      Component.Explorer({
        title: "CONOCIMIENTO",
        // filterFn: (f) => !f.name!.startsWith("某个目录"),
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
