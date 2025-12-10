# TODOS — Login error page

- Buat page authentication error / login error: **/api/auth/error?error=access_denied**

const params = new URLSearchParams({
  category: "Novel",
  sort: "most_voted",
  search: "harry"
})

router.push(`/books?${params.toString()}`)

fix responsive layout for create vote