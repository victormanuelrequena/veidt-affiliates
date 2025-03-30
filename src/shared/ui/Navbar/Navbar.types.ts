export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavbarProps {
  breadcrumbs: BreadcrumbItem[];
}
