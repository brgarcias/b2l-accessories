import styles from './styles.module.scss';

type LinearProgressProps = {
  show: boolean;
};

export default function LinearProgress({ show }: LinearProgressProps) {
  return show && <progress className={styles.pure_material_progress_linear} />;
}
