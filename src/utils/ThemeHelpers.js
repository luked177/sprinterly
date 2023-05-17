export const setTheme = (themeName) => {
	localStorage.setItem("SprinterlyTheme", themeName);
	document.documentElement.className = themeName;
};

export const setThemeAuto = (bool) => {
	localStorage.setItem("SprinterlyTheme", bool);
};

export const themeCheck = (selectedTheme) => {
	if (selectedTheme === "Auto") {
		setThemeAuto("true");
		if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	} else if (selectedTheme === "light") {
		setThemeAuto("false");
		setTheme("light");
	} else if (selectedTheme === "dark") {
		setThemeAuto("false");
		setTheme("dark");
	}
};

export const setUpTheme = () => {
	let themeType = localStorage.getItem("SprinterlyTheme");
	let isAuto = localStorage.getItem("SprinterlyAutoTheme");
	const selectedTheme = isAuto === "true" ? "Auto" : themeType ? themeType : "Auto";

	themeCheck(selectedTheme);
};
