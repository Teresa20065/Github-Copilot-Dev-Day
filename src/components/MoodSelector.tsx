interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void;
  disabled: boolean;
}

export default function MoodSelector({ onMoodSelect, disabled }: MoodSelectorProps) {
  const moods = [
    { id: 'happy', label: '😊 Feliz', className: 'mood-btn mood-btn-happy' },
    { id: 'stressed', label: '😰 Estresado', className: 'mood-btn mood-btn-stressed' },
    { id: 'motivated', label: '🔥 Motivado', className: 'mood-btn mood-btn-motivated' },
    { id: 'tired', label: '😴 Cansado', className: 'mood-btn mood-btn-tired' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {moods.map((mood) => (
        <button key={mood.id} onClick={() => onMoodSelect(mood.id)} disabled={disabled} className={`${mood.className} disabled:opacity-50 disabled:cursor-not-allowed`}>
          {mood.label}
        </button>
      ))}
    </div>
  );
}