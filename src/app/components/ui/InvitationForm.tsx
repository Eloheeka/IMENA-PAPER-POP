"use client";
import React from 'react';
 import { InvitationData } from '../../types';

type props = {
   data: InvitationData;
   onchange: (data:InvitationData) => void;
   onDownload:() => void;
};

type Props = {
  data: InvitationData;
  onChange:(data:InvitationData) => void;
  onDownload: () => void;
};

export default function InvitationForm({ data, onChange, onDownload }: Props) {
  
  return (
    <div>
      <input value={data.title}
      onChange={(e) => onChange({...data, title:e.target.value})} 
      placeholder="Title"
      />
      <button onClick={onDownload}>Download</button>
    </div>
  );
}