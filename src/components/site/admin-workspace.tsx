"use client";

import { useMemo, useState } from "react";
import { signOut } from "next-auth/react";
import { BarChart3, BookOpen, BriefcaseBusiness, ExternalLink, Eye, FileText, MessageSquareQuote, Search, Settings, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Lead = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  interestedIn: string;
  category: string;
  preferredFormat: string;
  message: string;
  status: string;
  createdAt: string;
};

type AdminItem = Record<string, unknown> & { id: string; title?: string; name?: string; key?: string; active?: boolean; published?: boolean };

type InitialData = {
  leads: Lead[];
  services: AdminItem[];
  trainingPrograms: AdminItem[];
  blogPosts: AdminItem[];
  testimonials: AdminItem[];
  settings: AdminItem[];
};

const tabs = [
  { id: "leads", label: "Leads", icon: Users },
  { id: "services", label: "Services", icon: BriefcaseBusiness },
  { id: "training-programs", label: "Training", icon: BookOpen },
  { id: "blog-posts", label: "Blog", icon: FileText },
  { id: "testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { id: "settings", label: "Settings", icon: Settings },
];

const resourceLabels: Record<string, string> = {
  services: "Services",
  "training-programs": "Training Programs",
  "blog-posts": "Blog Posts",
  testimonials: "Testimonials",
  settings: "Site Settings",
};

const resourceFields: Record<string, { name: string; label: string; type?: "textarea" | "boolean" | "list" }[]> = {
  services: [
    { name: "slug", label: "Slug" },
    { name: "title", label: "Title" },
    { name: "summary", label: "Summary", type: "textarea" },
    { name: "features", label: "Features", type: "list" },
    { name: "active", label: "Active", type: "boolean" },
  ],
  "training-programs": [
    { name: "slug", label: "Slug" },
    { name: "title", label: "Title" },
    { name: "overview", label: "Overview", type: "textarea" },
    { name: "modules", label: "Modules", type: "list" },
    { name: "duration", label: "Duration" },
    { name: "format", label: "Format" },
    { name: "active", label: "Active", type: "boolean" },
  ],
  "blog-posts": [
    { name: "slug", label: "Slug" },
    { name: "title", label: "Title" },
    { name: "excerpt", label: "Excerpt", type: "textarea" },
    { name: "content", label: "Content", type: "textarea" },
    { name: "category", label: "Category" },
    { name: "published", label: "Published", type: "boolean" },
  ],
  testimonials: [
    { name: "name", label: "Name" },
    { name: "role", label: "Role" },
    { name: "quote", label: "Quote", type: "textarea" },
    { name: "active", label: "Active", type: "boolean" },
  ],
  settings: [
    { name: "key", label: "Key" },
    { name: "label", label: "Label" },
    { name: "value", label: "Value", type: "textarea" },
  ],
};

export function AdminWorkspace({ data, metrics }: { data: InitialData; metrics: { label: string; value: number; hint: string }[] }) {
  const [activeTab, setActiveTab] = useState("leads");
  const activeLabel = tabs.find((tab) => tab.id === activeTab)?.label ?? "Dashboard";
  return (
    <div className="grid max-w-full gap-4 overflow-x-hidden lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-6">
      <div className="sticky top-0 z-40 -mx-3 border-b border-slate-200 bg-slate-50/90 px-3 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90 sm:-mx-6 sm:px-6 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">TechWave-X</p>
            <h2 className="text-lg font-black text-slate-950 dark:text-white">{activeLabel}</h2>
          </div>
          <button onClick={() => signOut({ callbackUrl: "/admin" })} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
            Sign out
          </button>
        </div>
      </div>

      <aside className="hidden lg:sticky lg:top-8 lg:block lg:self-start">
        <Card className="p-3">
          <div className="px-3 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Control room</p>
            <h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">Admin Console</h2>
          </div>
          <nav className="mt-2 grid gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("flex items-center gap-3 rounded-[8px] px-3 py-3 text-left text-sm font-semibold transition", activeTab === tab.id ? "bg-slate-950 text-white shadow-lg shadow-cyan-500/15 dark:bg-white dark:text-slate-950" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10")}>
                  <Icon className="size-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
          <a href="https://techwavex.com" target="_blank" rel="noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-[8px] bg-cyan-500 px-3 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
            <ExternalLink className="size-4" />
            View public site
          </a>
          <button onClick={() => signOut({ callbackUrl: "/admin" })} className="mt-4 w-full rounded-[8px] border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-600 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600 dark:border-white/10 dark:text-slate-300 dark:hover:bg-rose-500/10 dark:hover:text-rose-200">
            Sign out
          </button>
        </Card>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/92 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-2xl shadow-slate-900/15 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/92 lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-7 gap-1">
          <a href="https://techwavex.com" target="_blank" rel="noreferrer" className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-[8px] px-1 text-[10px] font-bold text-cyan-700 dark:text-cyan-200">
            <ExternalLink className="size-4" />
            <span className="max-w-full truncate">Site</span>
          </a>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("flex min-h-14 flex-col items-center justify-center gap-1 rounded-[8px] px-1 text-[10px] font-bold transition", active ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-500 dark:text-slate-400")}>
                <Icon className="size-4" />
                <span className="max-w-full truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="min-w-0 max-w-full">
        <Overview metrics={metrics} />
        {activeTab === "leads" ? <LeadManager leads={data.leads} /> : null}
        {activeTab !== "leads" ? <ResourceManager resource={activeTab} initialItems={resourceItems(activeTab, data)} /> : null}
      </div>
    </div>
  );
}

function Overview({ metrics }: { metrics: { label: string; value: number; hint: string }[] }) {
  return (
    <div className="mb-4 grid min-w-0 grid-cols-2 gap-3 sm:mb-6 sm:grid-cols-2 sm:gap-4 xl:grid-cols-5">
      {metrics.map((metric) => (
        <Card key={metric.label} className="relative overflow-hidden p-4 sm:p-5">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 to-violet-500" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">{metric.value}</div>
              <div className="mt-1 text-xs font-semibold leading-5 text-slate-700 dark:text-slate-200 sm:mt-2 sm:text-sm">{metric.label}</div>
              <p className="mt-1 hidden text-xs text-slate-500 dark:text-slate-400 sm:block">{metric.hint}</p>
            </div>
            <BarChart3 className="hidden size-8 text-cyan-500 sm:block" />
          </div>
        </Card>
      ))}
    </div>
  );
}

function LeadManager({ leads }: { leads: Lead[] }) {
  const [items, setItems] = useState(leads);
  const [selected, setSelected] = useState<Lead | null>(leads[0] ?? null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [interest, setInterest] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const interestOptions = useMemo(() => Array.from(new Set(items.map((lead) => lead.interestedIn).filter(Boolean))).sort(), [items]);
  const filtered = useMemo(() => items.filter((lead) => {
    const haystack = `${lead.fullName} ${lead.email} ${lead.phone} ${lead.interestedIn} ${lead.message}`.toLowerCase();
    const created = new Date(lead.createdAt).getTime();
    const afterStart = fromDate ? created >= new Date(`${fromDate}T00:00:00`).getTime() : true;
    const beforeEnd = toDate ? created <= new Date(`${toDate}T23:59:59`).getTime() : true;
    return haystack.includes(search.toLowerCase())
      && (status === "All" || lead.status === status)
      && (category === "All" || lead.category === category)
      && (interest === "All" || lead.interestedIn === interest)
      && afterStart
      && beforeEnd;
  }), [items, search, status, category, interest, fromDate, toDate]);

  async function update(id: string, nextStatus: string) {
    const res = await fetch(`/api/admin/leads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: nextStatus }) });
    if (!res.ok) return;
    setItems((current) => current.map((lead) => lead.id === id ? { ...lead, status: nextStatus } : lead));
    setSelected((current) => current?.id === id ? { ...current, status: nextStatus } : current);
  }

  async function remove(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (!res.ok) return;
    const next = items.filter((lead) => lead.id !== id);
    setItems(next);
    setSelected(next[0] ?? null);
  }

  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_340px] 2xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-6">
      <Card className="min-w-0 p-3 sm:p-4">
        <div className="mb-4 grid min-w-0 gap-2 sm:gap-3 md:grid-cols-2 xl:grid-cols-[minmax(220px,1fr)_120px_150px_120px_135px_135px] 2xl:grid-cols-[minmax(260px,1fr)_140px_180px_140px_140px_140px]">
          <label className="relative">
            <Search className="absolute left-3 top-3.5 size-4 text-slate-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email, phone, message..." className={`${inputClass} pl-10`} />
          </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}><option>All</option><option>Service</option><option>Training</option></select>
          <select value={interest} onChange={(e) => setInterest(e.target.value)} className={inputClass}><option>All</option>{interestOptions.map((option) => <option key={option}>{option}</option>)}</select>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputClass}><option>All</option><option>New</option><option>Contacted</option><option>Converted</option><option>Rejected</option></select>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className={inputClass} aria-label="From date" />
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className={inputClass} aria-label="To date" />
        </div>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">{filtered.length} lead{filtered.length === 1 ? "" : "s"} shown</p>
          <button onClick={() => { window.location.href = "/api/admin/leads/export"; }} className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">Export CSV</button>
        </div>
        <div className="grid gap-3 lg:hidden">
          {filtered.map((lead) => (
            <div key={lead.id} className={cn("rounded-[8px] border border-slate-200 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.04]", selected?.id === lead.id && "border-cyan-300 bg-cyan-400/10")}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate font-black text-slate-950 dark:text-white">{lead.fullName}</h3>
                  <p className="mt-1 truncate text-xs text-slate-500">{lead.phone}</p>
                </div>
                <span className={cn("shrink-0 rounded-full px-2.5 py-1 text-[11px] font-black", statusClass(lead.status))}>{lead.status}</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <InfoPill label="Type" value={lead.category} />
                <InfoPill label="Format" value={lead.preferredFormat} />
                <InfoPill label="Interested" value={lead.interestedIn} className="col-span-2" />
              </div>
              <div className="mt-3 flex gap-2">
                <select value={lead.status} onChange={(e) => update(lead.id, e.target.value)} className="h-10 flex-1 rounded-[8px] border border-slate-200 bg-white px-3 text-xs font-semibold dark:border-white/10 dark:bg-slate-950">
                  <option>New</option><option>Contacted</option><option>Converted</option><option>Rejected</option>
                </select>
                <Button variant="outline" size="sm" onClick={() => setSelected(lead)}><Eye className="size-4" /> View</Button>
                <Button variant="ghost" size="sm" onClick={() => remove(lead.id)}><Trash2 className="size-4" /></Button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden max-w-full overflow-x-auto lg:block">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400"><tr><th className="py-3">Lead</th><th>Category</th><th>Interested In</th><th>Status</th><th>Date</th><th className="text-right">Actions</th></tr></thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/10">
              {filtered.map((lead) => (
                <tr key={lead.id} className={cn("transition hover:bg-cyan-400/5", selected?.id === lead.id && "bg-cyan-400/10")}>
                  <td className="py-4"><div className="font-bold text-slate-950 dark:text-white">{lead.fullName}</div><div className="text-slate-500">{lead.email} | {lead.phone}</div></td>
                  <td>{lead.category}<div className="text-xs text-slate-500">{lead.preferredFormat}</div></td>
                  <td>{lead.interestedIn}</td>
                  <td><select value={lead.status} onChange={(e) => update(lead.id, e.target.value)} className="rounded-[8px] border border-slate-200 bg-white px-2 py-2 dark:border-white/10 dark:bg-slate-950"><option>New</option><option>Contacted</option><option>Converted</option><option>Rejected</option></select></td>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => setSelected(lead)}><Eye className="size-4" /> View</Button>
                    <Button variant="ghost" size="sm" onClick={() => remove(lead.id)}><Trash2 className="size-4" /> Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card className="min-w-0 p-4 sm:p-5 xl:sticky xl:top-8 xl:self-start">
        {selected ? (
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white sm:text-2xl">{selected.fullName}</h3>
                <p className="mt-1 text-sm text-slate-500">{selected.email} | {selected.phone}</p>
              </div>
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-bold text-cyan-700 dark:text-cyan-200">{selected.status}</span>
            </div>
            <dl className="mt-6 grid gap-4 text-sm">
              <Detail label="Interested In" value={selected.interestedIn} />
              <Detail label="Category" value={`${selected.category} | ${selected.preferredFormat}`} />
              <Detail label="Address" value={selected.address} />
              <Detail label="Message" value={selected.message} />
              <Detail label="Submitted" value={new Date(selected.createdAt).toLocaleString()} />
            </dl>
          </div>
        ) : <p className="text-sm text-slate-500">No lead selected.</p>}
      </Card>
    </div>
  );
}

function ResourceManager({ resource, initialItems }: { resource: string; initialItems: AdminItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [editing, setEditing] = useState<AdminItem | null>(null);
  const [search, setSearch] = useState("");
  const fields = resourceFields[resource];
  const filtered = items.filter((item) => JSON.stringify(item).toLowerCase().includes(search.toLowerCase()));

  async function save(values: Record<string, unknown>) {
    const isEdit = Boolean(editing?.id);
    const res = await fetch(`/api/admin/${resource}${isEdit ? `/${editing?.id}` : ""}`, {
      method: isEdit ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) return alert("Unable to save. Check required fields.");
    const { item } = await res.json();
    setItems((current) => isEdit ? current.map((entry) => entry.id === item.id ? item : entry) : [item, ...current]);
    setEditing(null);
  }

  async function remove(id: string) {
    if (!confirm("Delete this item permanently?")) return;
    const res = await fetch(`/api/admin/${resource}/${id}`, { method: "DELETE" });
    if (!res.ok) return alert("Unable to delete.");
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_400px] 2xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-6">
      <Card className="min-w-0 p-3 sm:p-4">
        <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-black text-slate-950 dark:text-white sm:text-2xl">{resourceLabels[resource]}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Create, edit, publish, activate, and remove records.</p>
          </div>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search records..." className={inputClass} />
        </div>
        <div className="grid gap-3">
          {filtered.map((item) => (
            <div key={item.id} className="rounded-[8px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-black text-slate-950 dark:text-white">{String(item.title ?? item.name ?? item.key ?? "Untitled")}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{String(item.summary ?? item.overview ?? item.excerpt ?? item.quote ?? item.value ?? "")}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button variant="outline" size="sm" className="flex-1 md:flex-none" onClick={() => setEditing(item)}>Edit</Button>
                  <Button variant="ghost" size="sm" className="flex-1 md:flex-none" onClick={() => remove(item.id)}>Delete</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <ResourceForm key={editing?.id ?? resource} resource={resource} fields={fields} item={editing} onCancel={() => setEditing(null)} onSave={save} />
    </div>
  );
}

function ResourceForm({ resource, fields, item, onSave, onCancel }: { resource: string; fields: { name: string; label: string; type?: "textarea" | "boolean" | "list" }[]; item: AdminItem | null; onSave: (values: Record<string, unknown>) => void; onCancel: () => void }) {
  function submit(formData: FormData) {
    const values: Record<string, unknown> = {};
    for (const field of fields) {
      if (field.type === "boolean") values[field.name] = formData.get(field.name) === "on";
      else values[field.name] = formData.get(field.name)?.toString() ?? "";
    }
    onSave(values);
  }

  return (
    <Card className="min-w-0 p-4 sm:p-5 xl:sticky xl:top-8 xl:self-start">
      <h2 className="text-xl font-black text-slate-950 dark:text-white sm:text-2xl">{item ? "Edit" : "Create"} {resourceLabels[resource]}</h2>
      <form action={submit} className="mt-5 grid gap-4">
        {fields.map((field) => {
          const raw = item?.[field.name];
          const value = Array.isArray(raw) ? raw.join("\n") : String(raw ?? "");
          if (field.type === "boolean") {
            return <label key={field.name} className="flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-100"><input name={field.name} type="checkbox" defaultChecked={Boolean(raw ?? true)} className="size-4" />{field.label}</label>;
          }
          return (
            <label key={field.name} className="grid gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
              {field.label}
              {field.type === "textarea" || field.type === "list" ? <textarea name={field.name} defaultValue={value} rows={field.type === "list" ? 4 : 6} className={textareaClass} placeholder={field.type === "list" ? "One item per line" : undefined} /> : <input name={field.name} defaultValue={value} className={inputClass} />}
            </label>
          );
        })}
        <div className="grid gap-3 sm:flex">
          <Button type="submit">{item ? "Save Changes" : "Create Item"}</Button>
          {item ? <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button> : null}
        </div>
      </form>
    </Card>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div><dt className="font-bold text-slate-950 dark:text-white">{label}</dt><dd className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{value}</dd></div>;
}

function InfoPill({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={cn("rounded-[8px] bg-slate-100 px-3 py-2 dark:bg-white/10", className)}>
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</div>
      <div className="mt-1 truncate font-bold text-slate-800 dark:text-slate-100">{value}</div>
    </div>
  );
}

function statusClass(status: string) {
  if (status === "Converted") return "bg-emerald-400/15 text-emerald-700 dark:text-emerald-200";
  if (status === "Rejected") return "bg-rose-400/15 text-rose-700 dark:text-rose-200";
  if (status === "Contacted") return "bg-blue-400/15 text-blue-700 dark:text-blue-200";
  return "bg-cyan-400/15 text-cyan-700 dark:text-cyan-200";
}

function resourceItems(resource: string, data: InitialData) {
  if (resource === "training-programs") return data.trainingPrograms;
  if (resource === "blog-posts") return data.blogPosts;
  return data[resource as keyof InitialData] as AdminItem[];
}

const inputClass = "h-11 w-full rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white";
const textareaClass = "min-h-28 rounded-[8px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white";
