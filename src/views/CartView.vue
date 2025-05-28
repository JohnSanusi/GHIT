<script setup>
import { ref, computed, reactive } from "vue";
import { useToast } from "vue-toastification";
import { useMainStore } from "../../stores/store";
import Back from "@/components/Back.vue";
import { useRouter } from "vue-router";

const store = useMainStore();
const router = useRouter();
const toast = useToast();

// Cart state
const cartItems = ref(store.allItems);

// Payment form state
const paymentForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  paymentMethod: "card",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
});


const isProcessing = ref(false);

// Computed properties
const subtotal = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const shipping = computed(() => {
  return cartItems.value.length > 0 ? 9.99 : 0;
});

const tax = computed(() => {
  return subtotal.value * 0.08; // 8% tax
});

const total = computed(() => {
  return subtotal.value + shipping.value + tax.value;
});

// Cart methods
const updateQuantity = (itemId, newQuantity) => {
  if (newQuantity < 1) return;

  const item = cartItems.value.find((item) => item.id === itemId);
  if (item) {
    item.quantity = newQuantity;
  }
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
// Payment processing
const show = ref(false);
const processPayment = async () => {
  if (store.isLoggedIn) {
    if (cartItems.value.length === 0) return;

    isProcessing.value = true;

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart after successful payment
      store.allItems.$reset();

      // Reset form
      Object.keys(paymentForm).forEach((key) => {
        if (typeof paymentForm[key] === "string") {
          paymentForm[key] = "";
        }
      });
      paymentForm.paymentMethod = "card";

      toast.success("payment proccessed successfully");
    } catch (error) {
      toast.error("payment failed, please try again");
    } finally {
      isProcessing.value = false;
    }
  } else {
    show.value = true;
  }
};
function goToLogin() {
  show.value = false;
  setTimeout(() => {
    router.push({ name: "login" });
  }, 1000);
}
function goToSignUp() {
  show.value = false;
  setTimeout(() => {
    router.push({ name: "signup" });
  }, 1000);
}
</script>
<template>
  <Back />
  <div class="min-h-screen bg-gray-50 py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        Shopping Cart & Checkout
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Cart Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Your Cart</h2>

          <div v-if="cartItems.length === 0" class="text-center py-8">
            <div class="text-gray-400 mb-4">
              <svg
                class="mx-auto h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                />
              </svg>
            </div>
            <p class="text-gray-500">Your cart is empty</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg"
            >
              <div class="flex-1">
                <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
                <p class="text-lg font-semibold text-gray-900">
                  ${{ item.price.toFixed(2) }}
                </p>
              </div>

              <div class="flex items-center space-x-2">
                <button
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  :disabled="item.quantity <= 1"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>

                <span class="w-8 text-center font-medium">{{
                  item.quantity
                }}</span>

                <button
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>

              <button
                @click="askToDelete(item.id)"
                class="text-red-500 hover:text-red-700 transition-colors"
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

          <!-- Order Summary -->
          <div
            v-if="cartItems.length > 0"
            class="mt-6 pt-6 border-t border-gray-200"
          >
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>Shipping</span>
                <span>${{ shipping.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>Tax</span>
                <span>${{ tax.toFixed(2) }}</span>
              </div>
              <div
                class="flex justify-between text-lg font-semibold pt-2 border-t border-gray-200"
              >
                <span>Total</span>
                <span>${{ total.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Form -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">
            Payment Information
          </h2>

          <form @submit.prevent="processPayment" class="space-y-6">
            <!-- Contact Information -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Contact Information
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >First Name</label
                  >
                  <input
                    v-model="paymentForm.firstName"
                    type="text"
                    id="firstName"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Last Name</label
                  >
                  <input
                    v-model="paymentForm.lastName"
                    type="text"
                    id="lastName"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div class="mt-4">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Email</label
                >
                <input
                  v-model="paymentForm.email"
                  type="email"
                  id="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <!-- Payment Method -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Payment Method
              </h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <input
                    v-model="paymentForm.paymentMethod"
                    type="radio"
                    id="card"
                    value="card"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label for="card" class="flex items-center space-x-2">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Credit Card</span>
                  </label>
                </div>
                <div class="flex items-center space-x-3">
                  <input
                    v-model="paymentForm.paymentMethod"
                    type="radio"
                    id="paypal"
                    value="paypal"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label for="paypal" class="flex items-center space-x-2">
                    <i class="pi pi-paypal text-2xl font-light"></i>
                    <span>PayPal</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Card Details -->
            <div v-if="paymentForm.paymentMethod === 'card'" class="space-y-4">
              <div>
                <label
                  for="cardNumber"
                  class="block text-sm font-medium text-gray-700 mb-1"
                  >Card Number</label
                >
                <input
                  v-model="paymentForm.cardNumber"
                  type="text"
                  maxlength="16"
                  inputmode="numeric"
                  pattern="[0-9]"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="expiryDate"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Expiry Date</label
                  >
                  <input
                    v-model="paymentForm.expiryDate"
                    type="text"
                    maxlength="4"
                    inputmode="numeric"
                    pattern="[0-9]"
                    id="expiryDate"
                    placeholder="MM/YY"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    for="cvv"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >CVV</label
                  >
                  <input
                    v-model="paymentForm.cvv"
                    type="text"
                    maxlength="3"
                    inputmode="numeric"
                    pattern="[0-9]"
                    id="cvv"
                    placeholder="123"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            <!-- Billing Address -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Billing Address
              </h3>
              <div class="space-y-4">
                <div>
                  <label
                    for="address"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Street Address</label
                  >
                  <input
                    v-model="paymentForm.address"
                    type="text"
                    id="address"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      for="city"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >City</label
                    >
                    <input
                      v-model="paymentForm.city"
                      type="text"
                      id="city"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="state"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >State</label
                    >
                    <input
                      v-model="paymentForm.state"
                      type="text"
                      id="state"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="zipCode"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >ZIP Code</label
                    >
                    <input
                      v-model="paymentForm.zipCode"
                      type="text"
                      id="zipCode"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-6">
              <button
                type="submit"
                :disabled="cartItems.length === 0 || isProcessing"
                class="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <span v-if="isProcessing">Processing...</span>
                <span v-else>Complete Payment (${{ total.toFixed(2) }})</span>
              </button>
            </div>
          </form>
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
        <h1 class="text-xl font-semibold tracking-wide mb-2">Are Your Sure?</h1>
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
          to="/login"
          @click="goToLogin"
          class="text-black flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:shadow-xl"
        >
          Login
        </button>
        <button
          @click="goToSignUp"
          to="/signup"
          class="text-white bg-blue-500 flex tracking-widest border border-black-[1.8px] font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-pointer hover:bg-blue-700"
        >
          SignUp
        </button>
      </div>
    </div>
  </div>
</template>
