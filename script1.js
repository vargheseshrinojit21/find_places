<script src="script.js" defer>
    const disabilityFacilityCheckbox = document.getElementById("disabilityFacilityCheckbox");
    const foodFacilityCheckbox = document.getElementById("foodFacilityCheckbox");
    const parkingFacilityCheckbox = document.getElementById("parkingFacilityCheckbox");
    const reviews = document.querySelectorAll(".review");

    function updateFilters() {
        reviews.forEach(review => {
            const disabilityInfo = review.querySelector(".disability-facility");
            const foodInfo = review.querySelector(".food-facility");
            const parkingInfo = review.querySelector(".parking-facility");

            const showDisability = !disabilityFacilityCheckbox.checked || disabilityInfo.textContent.includes("Yes");
            const showFood = !foodFacilityCheckbox.checked || foodInfo.textContent.includes("Yes");
            const showParking = !parkingFacilityCheckbox.checked || parkingInfo.textContent.includes("Yes");

            if (showDisability && showFood && showParking) {
                review.style.display = "block";
            } else {
                review.style.display = "none";
            }
        });
    }

    disabilityFacilityCheckbox.addEventListener("change", updateFilters);
    foodFacilityCheckbox.addEventListener("change", updateFilters);
    parkingFacilityCheckbox.addEventListener("change", updateFilters);

    updateFilters(); // Initial update when the page loads
</script>
