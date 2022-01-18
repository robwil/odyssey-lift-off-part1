import React from 'react';
import { gql, useQuery} from '@apollo/client';
import { Layout, QueryResult } from '../components';
import ModuleDetail from '../components/module-detail';

export const GET_MODULE = gql`
query getModule($moduleId: ID!) {
  module(id: $moduleId) {
    id
    title
    videoUrl
    content
    track {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
}
`;

const Module = ({ trackId, moduleId }) => {
    // Note: The solution code wants you to use trackId to explicitly fetch Track.
    // But I modeled Track as nested inside Module already, so no need for this.
    // Not sure if one is more or less efficient?
    const { loading, error, data } = useQuery(GET_MODULE, {
        variables: { moduleId }
    })
    return <Layout fullWidth={true}>
        <QueryResult error={error} loading={loading} data={data}>
            <ModuleDetail module={data?.module} track={data?.module?.track} />
        </QueryResult>
    </Layout>;
}

export default Module;