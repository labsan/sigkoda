// REGISTER SERVICE WORKER
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('../../serviceworker.js')
			.then(() => {
				console.log('Pendaftaran Serviceworker Berhasil.');
			})
			.catch(() => {
				console.log('Pendaftaran Serviceworker Gagal.');
			});
	});
} else {
	console.log('Serviceworker belum didukung browser ini.');
}