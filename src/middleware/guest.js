export default function guest(next) {
    if (localStorage.getItem('token')) {
        return next({name: 'profile'})
    }

    return next();
}
