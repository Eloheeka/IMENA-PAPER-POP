"use client";
import React from 'react';
import { InvitationData } from '../../types';

interface Props {
  data: InvitationData;
  onChange: (data: InvitationData) => void;
  onDownload: () => void;
}

export default function InvitationForm({ data, onChange, onDownload }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 space-y-4">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Event Details</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Event Title</label>
        <input name="title" type="text" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="e.g. Family Get Together" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Sub-Family</label>
        <select name="subFamily" onChange={handleChange} className="w-full p-2 border rounded-md">
          <option value="General Imena">General Imena</option>
          <option value="Wihogora">Wihogora</option>
          <option value="Imitari">Imitari</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input name="date" type="date" onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input name="time" type="time" onChange={handleChange} className="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input name="location" type="text" onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Venue name or Link" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Agenda / Message</label>
        <textarea name="agenda" rows={4} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="What's happening?"></textarea>
      </div>

      <button 
        onClick={onDownload}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all shadow-md"
      >
        Download Invitation (PDF)
      </button>
    </div>
  );
}