import { useState } from "react";
import {
  User,
  SlidersHorizontal,
  Bell,
  ShieldCheck,
  Trash2,
  Moon,
  Sun,
  Monitor,
  Mail,
  Smartphone,
  KeyRound,
  MonitorSmartphone,
  Camera,
  X,
} from "lucide-react";

function Settings() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [theme, setTheme] = useState("Dark");
  const [timezone, setTimezone] = useState("Europe/London");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Page heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="mt-1 text-sm text-white/50">
          Manage your account, integrations, and application preferences.
        </p>
      </div>

      {/* Centered settings column */}
      <div className="mx-auto w-full max-w-3xl space-y-5 pb-8">
        {/* General */}
        <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="rounded-lg bg-white/10 p-2">
              <User size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-white">General</h2>
              <p className="text-sm text-white/50">
                Update your profile information and account details.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-end gap-5">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
              <User size={38} className="text-white" />
              <button
                type="button"
                aria-label="Change profile picture"
                className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
              >
                <Camera size={14} />
              </button>
            </div>

            <div className="min-w-[180px] flex-1">
              <label className="mb-2 block text-sm text-white/70">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#080b14] px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              />
            </div>

            <div className="min-w-[180px] flex-1">
              <label className="mb-2 block text-sm text-white/70">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#080b14] px-3 py-2 text-sm text-white outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="button"
              className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="rounded-lg bg-white/10 p-2">
              <Bell size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-white">Notifications</h2>
              <p className="text-sm text-white/50">
                Choose how you want to receive updates.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-3">
                <Mail size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Email Notifications
                </p>
                <p className="text-xs text-white/50">
                  Receive updates and reports via email.
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              aria-label="Email notifications"
              className="h-5 w-5 accent-blue-500"
            />
          </div>

          <div className="flex items-center justify-between gap-4 pt-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/10 p-3">
                <Smartphone size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  In-App Notifications
                </p>
                <p className="text-xs text-white/50">
                  Receive alerts inside your AutoPost dashboard.
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={appNotifications}
              onChange={(e) => setAppNotifications(e.target.checked)}
              aria-label="In-app notifications"
              className="h-5 w-5 accent-blue-500"
            />
          </div>
        </section>

        {/* Preferences */}
        <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="rounded-lg bg-white/10 p-2">
              <SlidersHorizontal size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-white">Preferences</h2>
              <p className="text-sm text-white/50">
                Customize your application experience.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-sm font-medium text-white">Appearance</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { name: "Light", icon: Sun },
                { name: "Dark", icon: Moon },
                { name: "System", icon: Monitor },
              ].map((option) => {
                const Icon = option.icon;

                return (
                  <button
                    type="button"
                    key={option.name}
                    onClick={() => setTheme(option.name)}
                    className={`flex items-center justify-center gap-2 rounded-lg border p-3 text-sm transition ${
                      theme === option.name
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-white/10 text-white/60 hover:bg-white/5"
                    }`}
                  >
                    <Icon size={17} />
                    {option.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-white">
              Timezone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-[#080b14] px-3 py-3 text-sm text-white outline-none focus:border-blue-500"
            >
              <option value="Europe/London">London (GMT/BST)</option>
              <option value="Africa/Lagos">Lagos (WAT)</option>
              <option value="America/New_York">New York (ET)</option>
              <option value="Asia/Tokyo">Tokyo (JST)</option>
            </select>
          </div>
        </section>

        {/* Integrations */}
        <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="rounded-lg bg-white/10 p-2">
              <X size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-white">Integrations</h2>
              <p className="text-sm text-white/50">
                Manage your connected social media accounts.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#080b14] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <X size={25} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-white">X (Twitter)</p>
                <p className="text-sm text-white/50">
                  Connect your X account to publish and track posts.
                </p>
                <p className="mt-1 text-xs text-green-400">● Connected</p>
              </div>
            </div>

            <button
              type="button"
              className="rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
            >
              Disconnect
            </button>
          </div>
        </section>

        {/* Security */}
        <section className="rounded-xl border border-white/10 bg-[#10182a] p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="rounded-lg bg-white/10 p-2">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-white">Security</h2>
              <p className="text-sm text-white/50">
                Manage your password and account security.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/10 p-3">
                <KeyRound size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Change Password
                </p>
                <p className="text-xs text-white/50">
                  Update your account password.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              Change Password
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-purple-500/10 p-3">
                <MonitorSmartphone size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Active Sessions
                </p>
                <p className="text-xs text-white/50">
                  Review devices where you're currently signed in.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            >
              View Sessions
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 pt-5">
            <div>
              <p className="text-sm font-medium text-white">
                Two-Factor Authentication
              </p>
              <p className="text-xs text-white/50">
                Add an extra layer of security to your account.
              </p>
            </div>
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={(e) => setTwoFactor(e.target.checked)}
              aria-label="Two-factor authentication"
              className="h-5 w-5 accent-blue-500"
            />
          </div>
        </section>

        {/* Danger Zone */}
        <section className="rounded-xl border border-red-500/30 bg-[#10182a] p-5">
          <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
            <div className="rounded-lg bg-red-500/10 p-2">
              <Trash2 size={20} className="text-red-400" />
            </div>
            <div>
              <h2 className="font-semibold text-red-400">Danger Zone</h2>
              <p className="text-sm text-white/50">
                Irreversible actions that affect your account.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
            <div>
              <p className="text-sm font-medium text-white">Delete Account</p>
              <p className="text-xs text-white/50">
                Permanently delete your account and associated data.
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg border border-red-500/40 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
            >
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
