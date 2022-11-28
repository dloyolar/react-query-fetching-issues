import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';
import { Label } from '../interfaces/label';

const getLabels = async (): Promise<Label[]> => {
  await sleep(1);
  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
  });

  return labelsQuery;
};
