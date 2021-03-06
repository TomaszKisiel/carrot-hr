export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE"
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE"
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE"

export function createEmployee( signature ) {
  return { type: CREATE_EMPLOYEE, signature }
}

export function updateEmployee( employeeId, field, value ) {
	return { type: UPDATE_EMPLOYEE, employeeId, field, value }
}

export function removeEmployee( employeeId ) {
	return { type: REMOVE_EMPLOYEE, employeeId }
}
