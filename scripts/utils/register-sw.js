// REGISTER SERVICE WORKER
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker
			.register('../../serviceworker.js')
			.then(function () {
				console.log('Pendaftaran Serviceworker Berhasil.');
			})
			.catch(function () {
				console.log('Pendaftaran Serviceworker Gagal.');
			});
	});
} else {
	console.log('Serviceworker belum didukung browser ini.');
}