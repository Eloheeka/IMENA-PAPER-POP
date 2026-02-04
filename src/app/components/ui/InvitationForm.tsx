import type { InvitationData } from "../../types";

type Props = {
  data: InvitationData;
  onChange: (data: InvitationData) => void;
  onDownload: () => void;
};

export default function InvitationForm({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold">Create Announcement</h2>
        <p className="text-sm text-gray-500">
          Fill in the event details
        </p>
      </div>

      {/* Sub Family */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Sub-Family</label>
        <select
          className="w-full rounded-lg bg-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={data.subFamily ?? ""}
          onChange={(e) =>
            onChange({ ...data, subFamily: e.target.value })
          }
        >
          <option value="">Select sub-family</option>
          <option value="Wihogora">Wihogora</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Title */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Event Title</label>
        <input
          className="w-full rounded-lg bg-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Family Reunion 2025"
          value={data.title}
          onChange={(e) =>
            onChange({ ...data, title: e.target.value })
          }
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <textarea
          className="w-full rounded-lg bg-gray-100 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Join us for an unforgettable gathering..."
          value={data.agenda ?? ""}
          onChange={(e) =>
            onChange({ ...data, agenda: e.target.value })
          }
        />
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <input
            type="date"
            className="w-full rounded-lg bg-gray-100 px-3 py-2"
            value={data.date}
            onChange={(e) =>
              onChange({ ...data, date: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Time</label>
          <input
            type="time"
            className="w-full rounded-lg bg-gray-100 px-3 py-2"
            value={data.time ?? ""}
            onChange={(e) =>
              onChange({ ...data, time: e.target.value })
            }
          />
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <input
          className="w-full rounded-lg bg-gray-100 px-3 py-2"
          placeholder="Kigali"
          value={data.location}
          onChange={(e) =>
            onChange({ ...data, location: e.target.value })
          }
        />
      </div>
    </div>
  );
}
