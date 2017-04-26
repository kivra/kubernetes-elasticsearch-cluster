

function initDashboard () {

  const esApiPrefix = '/api/v1/namespaces/default/services/elasticsearch:9200/proxy';

  const ds = [{
    name: 'cluster-health',
    path: '/_cluster/health?pretty=true',
    title: 'Cluster-Health'
  }, {
    name: 'cluster-health',
    path: '/_nodes/?pretty=true',
    title: 'Cluster-Health'
  }]

  const el = document.createElement('div')

  ds.forEach((s) => {
    fetch(esApiPrefix+s.path)
      .then((res) => res.json())
      .then((data) => {
        const subEl = document.createElement('div');
        Object.keys(data)
          .forEach((key) => {
            const entryEl = document.createElement('p');
            entryEl.innerHTML = `${key}: ${JSON.stringify(data[key], null, '\t')}`;
            subEl.appendChild(entryEl);
          });
        el.appendChild(subEl);
      });
  });

  document.getElementById('dashboard')
    .appendChild(el);
}
