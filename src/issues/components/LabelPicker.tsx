import { LoadingIcon } from '../../shared/components/LoadingIcon';
import { useLabels } from '../hooks/useLabels';

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker = ({ selectedLabels, onChange }: Props) => {
  const labels = useLabels();

  if (labels.isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      {labels.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? 'label-active' : ''
          }`}
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
