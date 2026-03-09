
type routeResult = Array<string | number>

export function getRouteToHomepage(): routeResult {
  return ['/'];
}

export function getRouteToStudentDetails(idStudent: number): routeResult {
  return ['/', 'students', idStudent];
}
