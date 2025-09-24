fetch('data/transportasi.json')
  .then(res => res.json())
  .then(data => {
    const ctx = document.getElementById('transportChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.tahun,
        datasets: [{
          label: 'Jumlah Penumpang (juta)',
          data: data.jumlah,
          backgroundColor: '#F97316'
        }]
      },
      options: {responsive:true,plugins:{legend:{display:true}}}
    });
  });