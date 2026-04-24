function ensureDocumentPrefix(value: string, prefix = "doc"): string {
	const trimmed = value.trim();
	const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const match = trimmed.match(new RegExp(`^${escapedPrefix}-(.+)$`, "i"));
	const body = match ? match[1] : trimmed;
	return `${prefix.toLowerCase()}-${body}`;
}

function extractDocumentNumber(value: string): string | null {
	const trimmed = value.trim();
	// Accepts any alphabetic prefix (doc-, wiki-, guide-, etc.) or bare number
	const match = trimmed.match(/^(?:[a-zA-Z][a-zA-Z0-9]*-)?0*([0-9]+)$/i);
	return match?.[1] ?? null;
}

export function normalizeDocumentId(id: string, prefix = "doc"): string {
	return ensureDocumentPrefix(id, prefix);
}

export function documentIdsEqual(left: string, right: string): boolean {
	const leftNumber = extractDocumentNumber(left);
	const rightNumber = extractDocumentNumber(right);
	if (leftNumber !== null && rightNumber !== null) {
		return leftNumber === rightNumber;
	}
	return normalizeDocumentId(left).toLowerCase() === normalizeDocumentId(right).toLowerCase();
}
