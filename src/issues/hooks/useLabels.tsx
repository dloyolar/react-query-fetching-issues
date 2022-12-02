import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';
import { Label } from '../interfaces/label';

const getLabels = async (): Promise<Label[]> => {
  await sleep(1);
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100', {
    headers: {
      Authorization: null,
    },
  });
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
    // initialData: [],
    placeholderData: [
      {
        id: 791921801,
        node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
        url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        name: '❤️',
        color: 'ffffff',
        default: false,
      },
      {
        id: 71502270,
        node_id: 'MDU6TGFiZWw3MTUwMjI3MA==',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Build%20Infrastructure',
        name: 'Component: Build Infrastructure',
        color: 'f9d0c4',
        default: false,
      },
    ],
  });

  return labelsQuery;
};
