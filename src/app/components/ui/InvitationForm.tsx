import type { InvitationData } from "../../types";

type Props = {
  data: InvitationData;
  onChange: (data: InvitationData) => void;
};

export default function InvitationForm({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Create Announcement
        </h2>
        <p className="text-sm text-gray-500">
          Fill in the event details
        </p>
      </div>
      <hr className="border-gray-100" />


      {/* Sub-Family */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Sub-Family
        </label>
        <select
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={data.subFamily ?? ""}
          onChange={(e) =>
            onChange({ ...data, subFamily: e.target.value })
          }
        >
          <option value="">Select sub-family</option>
          <option value="Wihogora">Wihogora</option>
          <option value="Light">Light</option>
          <option value="Hope">Hope</option>
        </select>
      </div>

      {/* Event Title */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Event Title
        </label>
        <input
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm
                     placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Family Reunion 2025"
          value={data.title}
          onChange={(e) =>
            onChange({ ...data, title: e.target.value })
          }
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          rows={3}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm
                     placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <label className="text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data.date}
            onChange={(e) =>
              onChange({ ...data, date: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data.time ?? ""}
            onChange={(e) =>
              onChange({ ...data, time: e.target.value })
            }
          />
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm
                     placeholder:text-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
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
