"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

type Lead = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  category: string;
  preferredFormat: string;
  status: string;
  createdAt: string | Date;
};

export function AdminLeads({ leads }: { leads: Lead[] }) {
  const [items, setItems] = useState(leads);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const filtered = useMemo(() => items.filter((lead) => {
    const haystack = `${lead.fullName} ${lead.email} ${lead.phone} ${lead.interestedIn}`.toLowerCase();
    return haystack.includes(search.toLowerCase()) && (status === "All" || lead.status === status);
  }), [items, search, status]);

  async function update(id: string, nextStatus: string) {
    await fetch(`/api/admin/leads/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: nextStatus }) });
    setItems((current) => current.map((lead) => lead.id === id ? { ...lead, status: nextStatus } : lead));
  }

  async function remove(id: string) {
    await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    setItems((current) => current.filter((lead) => lead.id !== id));
  }

  return (
    <div className="rounded-[8px] border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mb-4 grid gap-3 md:grid-cols-[1fr_180px_auto]">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, email, phone..." className={inputClass} />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputClass}><option>All</option><option>New</option><option>Contacted</option><option>Converted</option><option>Rejected</option></select>
        <button onClick={() => { window.location.href = "/api/admin/leads/export"; }} className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">Export CSV</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400"><tr><th className="py-3">Lead</th><th>Category</th><th>Interested In</th><th>Status</th><th>Date</th><th className="text-right">Actions</th></tr></thead>
          <tbody className="divide-y divide-slate-200 dark:divide-white/10">
            {filtered.map((lead) => (
              <tr key={lead.id}>
                <td className="py-4"><div className="font-bold text-slate-950 dark:text-white">{lead.fullName}</div><div className="text-slate-500">{lead.email} · {lead.phone}</div></td>
                <td>{lead.category}<div className="text-xs text-slate-500">{lead.preferredFormat}</div></td>
                <td>{lead.interestedIn}</td>
                <td><select value={lead.status} onChange={(e) => update(lead.id, e.target.value)} className="rounded-[8px] border border-slate-200 bg-white px-2 py-2 dark:border-white/10 dark:bg-slate-950"><option>New</option><option>Contacted</option><option>Converted</option><option>Rejected</option></select></td>
                <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td className="text-right"><Button variant="ghost" size="sm" onClick={() => remove(lead.id)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const inputClass = "h-11 rounded-[8px] border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none dark:border-white/10 dark:bg-white/[0.06] dark:text-white";
