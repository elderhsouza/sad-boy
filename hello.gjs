// pkg.initGettext();
// pkg.initFormat();

// pkg.require({
// 	// Gio: '2.0',
// 	Gtk: '4.0',
// 	// Gdk: '4.0',
// 	// GdkX11: '4.0',
// 	// Touche: '2.0.0',
// });

imports.gi.versions.Gtk = '3.0'; // or '3.0' de

// const {
// 	// Adw,
// 	// Gio,
// 	Gtk,
// 	// Gdk,
// } = imports.gi;

const Gtk = imports.gi.Gtk;

let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });

app.connect('activate', () => {
	let win = new Gtk.ApplicationWindow({ application: app });
	let btn = new Gtk.Button({ label: 'Hello, World!' });

	btn.connect('clicked', () => {
		win.close();
	});

	win.add(btn);
	win.show_all();
});

app.run([]);
