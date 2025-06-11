<script setup>
import { ref, computed } from "vue";
import { useToast } from "vue-toastification";
import { useMainStore } from "../stores/store";
import axios from "axios";

const store = useMainStore();
const router = useRouter();
const toast = useToast();

// Sample cart items with type field
const cartItems = ref(store.allItems);

// Shipping locations with hardcoded prices
const shippingLocations = ref([
  { id: "local", name: "Local Delivery", price: 5.99 },
  { id: "domestic", name: "Domestic Shipping", price: 12.99 },
  { id: "express", name: "Express Delivery", price: 24.99 },
  { id: "international", name: "International Shipping", price: 39.99 },
]);

const selectedLocation = ref("");

// Payment information
const paymentInfo = ref({
  fullName: "",
  email: "",
  location: "",
  receipt: null,
});

// Computed properties
const hasProducts = computed(() => {
  return cartItems.value.some((item) => item.type === "product");
});

const subtotal = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const shippingFee = computed(() => {
  if (!hasProducts.value || !selectedLocation.value) return 0;

  const location = shippingLocations.value.find(
    (loc) => loc.id === selectedLocation.value
  );
  return location ? location.price : 0;
});

const total = computed(() => {
  return subtotal.value + shippingFee.value;
});

const canSubmit = computed(() => {
  const hasRequiredFields =
    paymentInfo.value.fullName &&
    paymentInfo.value.email &&
    paymentInfo.value.receipt;

  const hasShippingIfNeeded = !hasProducts.value || selectedLocation.value;

  return hasRequiredFields && hasShippingIfNeeded && cartItems.value.length > 0;
});

// Methods
const updateQuantity = (itemId, newQuantity) => {
  if (newQuantity <= 0) {
    removeItem(itemId);
    return;
  }

  const item = cartItems.value.find((item) => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  paymentInfo.value.receipt = file;
};
const showDialog = ref(false);
const selectedItemId = ref(null);

const askToDelete = (itemId) => {
  selectedItemId.value = itemId;
  showDialog.value = true;
};
const confirmDelete = () => {
  const index = cartItems.value.findIndex(
    (item) => item.id === selectedItemId.value
  );
  if (index > -1) {
    cartItems.value.splice(index, 1);
  }
  showDialog.value = false;
  selectedItemId.value = null;
};

const cancelDelete = () => {
  showDialog.value = false;
  selectedItemId.value = null;
};

const show = ref(false);

const processPayment = async () => {
  if (store.user) {
    if (!canSubmit.value) return;

    try {
      // To Admin's dashboard panel
      const adminData = new FormData();
      adminData.append("items", JSON.stringify(cartItems.value));
      adminData.append("subtotal", total.value);
      adminData.append("shipping fee", shippingFee.value);
      adminData.append("shippingLocation", selectedLocation.value);
      adminData.append(
        "paymentInfo",
        JSON.stringify({
          fullName: paymentInfo.value.fullName,
          email: paymentInfo.value.email,
          location: paymentInfo.value.location,
        })
      );
      adminData.append("reciept", paymentInfo.value.receipt);

      // To payment endpoint
      const paymentData = new FormData();
      paymentData.append(
        "paymentInfo",
        JSON.stringify({
          fullName: paymentInfo.value.fullName,
          email: paymentInfo.value.email,
          location: paymentInfo.value.location,
        })
      );
      paymentData.append("reciept", paymentInfo.value.receipt);

      await axios.post(
        "https://ghit-backend.onrender.com/api/payment",
        paymentData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Order submitted successfully");

      store.clearAll();
      setTimeout(() => {
        router.push("/");
      }, 4000);
      // Reset form after successful submission
      selectedLocation.value = "";
      paymentInfo.value = {
        fullName: "",
        email: "",
        location: "",
        receipt: null,
      };
    } catch (error) {
      toast.error(
        "Submission failed" + (error.response?.data?.error || error.message)
      );
    }
  } else {
    show.value = true;
  }
};

function goToLogin() {
  show.value = false;
  setTimeout(() => {
    router.push("/login");
  }, 1000);
}
function goToSignUp() {
  show.value = false;
  setTimeout(() => {
    router.push("/signup");
  }, 1000);
}
</script>
<template>
  <Back />
  <section>
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cart Items -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-xl font-semibold mb-4">Cart Items</h2>

              <div
                v-if="cartItems.length === 0"
                class="text-center py-8 text-gray-500"
              >
                Your cart is empty
              </div>

              <div v-else class="space-y-4">
                <div
                  v-for="item in cartItems"
                  :key="item.id"
                  class="flex items-center justify-between border-b pb-4"
                >
                  <div class="flex items-center space-x-4">
                    <div>
                      <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
                      <p class="text-sm text-gray-500 capitalize">
                        {{ item.type }}
                      </p>
                      <p class="text-sm font-medium text-gray-900">
                        ${{ item.price.toFixed(2) }}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <button
                      @click="updateQuantity(item.id, item.quantity - 1)"
                      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span class="w-8 text-center">{{ item.quantity }}</span>
                    <button
                      @click="updateQuantity(item.id, item.quantity + 1)"
                      class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                    <button
                      @click="askToDelete(item.id)"
                      class="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Order Summary & Payment -->
          <div class="space-y-6">
            <!-- Shipping Location (only if there are products) -->
            <div v-if="hasProducts" class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold mb-4">Shipping Location</h3>
              <select
                v-model="selectedLocation"
                class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select shipping location</option>
                <option
                  v-for="location in shippingLocations"
                  :key="location.id"
                  :value="location.id"
                >
                  {{ location.name }} - ${{ location.price.toFixed(2) }}
                </option>
              </select>
            </div>

            <!-- Order Summary -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold mb-4">Order Summary</h3>

              <div class="space-y-2">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span>${{ subtotal.toFixed(2) }}</span>
                </div>

                <div
                  v-if="hasProducts && shippingFee > 0"
                  class="flex justify-between"
                >
                  <span>Shipping (Products only)</span>
                  <span>${{ shippingFee.toFixed(2) }}</span>
                </div>

                <div
                  class="border-t pt-2 flex justify-between font-semibold text-lg"
                >
                  <span>Total</span>
                  <span>${{ total.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold mb-4">Payment Information</h3>
              <div class="mb-4">
                <h4 class="text-base font-semibold mb-1">
                  Bank Name:
                  <span class="text-base font-light">GT Bank</span>
                </h4>
                <h4 class="text-base font-semibold mb-1">
                  Account Number:
                  <span class="text-base font-light">0023459493</span>
                </h4>
                <h4 class="text-base font-semibold mb-1">
                  Account Name:
                  <span class="text-base font-light">GHIT SCHOOLS</span>
                </h4>
              </div>

              <form @submit.prevent="processPayment" class="space-y-4">
                <div>
                  <label
                    for="fullName"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    v-model="paymentInfo.fullName"
                    type="text"
                    required
                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    v-model="paymentInfo.email"
                    type="email"
                    required
                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div v-if="hasProducts">
                  <label
                    for="location"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Shipping Address
                  </label>
                  <input
                    id="address"
                    v-model="paymentInfo.location"
                    type="text"
                    required
                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your shipping address"
                  />
                </div>

                <div>
                  <label
                    for="receipt"
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Payment Receipt
                  </label>
                  <input
                    id="receipt"
                    type="file"
                    @change="handleFileUpload"
                    accept="image/*,.pdf"
                    required
                    class="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p class="text-xs text-gray-500 mt-1">
                    Upload your payment receipt (JPG, PNG, or PDF)
                  </p>
                </div>

                <button
                  type="submit"
                  :disabled="!canSubmit"
                  class="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 cursor-pointer"
                >
                  Complete Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showDialog"
      class="flex justify-center items-center bg-black/20 fixed top-0 left-0 min-w-full min-h-full"
    >
      <div
        class="bg-white shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[30%] h-35 p-3 flex flex-col justify-between"
      >
        <div>
          <h1 class="text-xl font-semibold tracking-wide mb-2">
            Are Your Sure?
          </h1>
          <p>This action cannot be undone.</p>
        </div>

        <div class="flex flex-row gap-3 justify-end">
          <button
            @click="cancelDelete"
            class="text-black flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:shadow-xl"
          >
            Cancel
          </button>
          <button
            @click="confirmDelete"
            class="text-white bg-red-500 flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="show"
      class="flex justify-center items-center bg-black/20 fixed top-0 left-0 min-w-full min-h-full"
    >
      <div
        class="bg-white shadow-lg rounded-lg w-[90%] md:w-[60%] lg:w-[30%] h-35 p-3 flex flex-col justify-between"
      >
        <div>
          <h1 class="text-xl font-semibold tracking-wide mb-2">Invalid User</h1>
          <p>You must be Logged In to continue</p>
        </div>

        <div class="flex flex-row gap-3 justify-end">
          <button
            @click="goToLogin"
            class="text-black flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:shadow-xl"
          >
            Login
          </button>
          <button
            @click="goToSignUp"
            class="text-white bg-blue-500 flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:bg-blue-700"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
